'use client';

import { useState, useEffect } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { PaymentCommandService } from '@/services/commands/payment.commandService';
import InputTextForm from '@/components/inputs/InputTextForm';
import Image from 'next/image';
import InputSelectForm from '@/components/inputs/InputSelectForm';
import { IStripeFormProps } from '@/shared/interfaces/components/payments/StripeForm.interface';
import { currencyOptions } from '@/shared/constants/components/payments/StripeForm.constants';
import { PaymentQueryService } from '@/services/queries/payment.queryService';

const StripeForm = ({
  amount,
  currency = 'usd',
  savings = 0,
  tax = 0.21,
}: IStripeFormProps) => {
  const stripe = useStripe();
  const elements = useElements();

  const [clientSecret, setClientSecret] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('EUR');
  const [exchangeRate, setExchangeRate] = useState(1);

  const amountInDollars = amount / 100;
  const discount = amountInDollars * savings;
  const taxAmount = (amountInDollars - discount) * tax;
  const finalAmount = (amountInDollars - discount + taxAmount).toFixed(2);
  const finalAmountInCents = Math.round(parseFloat(finalAmount) * 100);





  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const res = await PaymentQueryService.changeCurrency(currency);
        setExchangeRate(res.rates[selectedCurrency] || 1);
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      }
    };

    fetchExchangeRate();
  }, [selectedCurrency, currency]);







  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const resp = await PaymentCommandService.payment({
          amount: finalAmountInCents,
          currency,
        });
        setClientSecret(resp.clientSecret);
      } catch (error) {
        console.error('Error fetching clientSecret:', error);
      }
    };

    fetchClientSecret();
  }, [finalAmountInCents, currency]);





  const convertedAmount = (parseFloat(finalAmount) * exchangeRate).toFixed(2);
  const convertedOriginalPrice = (amountInDollars * exchangeRate).toFixed(2);
  const convertedDiscount = (discount * exchangeRate).toFixed(2);
  const convertedTaxAmount = (taxAmount * exchangeRate).toFixed(2);





  const onPay = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      console.error('CardElement not found');
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: { name, email },
    });

    if (error) {
      console.error('Error creating payment method:', error);
      return;
    }

    const { error: paymentError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
      });

    if (paymentError) {
      console.error('Payment error:', paymentError);
    } else {
      console.log('Payment successful:', paymentIntent);
    }
  };




  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-2/3 mx-auto">
        <h1 className="text-3xl font-bold text-text2 text-center mb-6">Pago</h1>
        <div className="w-1/2 mx-auto flex flex-col gap-6">
          <div className="w-full flex gap-4">
            <div className="w-2/4">
              <InputTextForm
                label="Email"
                type="email"
                id="emailInput"
                placeholder="ejemplo123@gmail.com"
                data={email}
                onChange={setEmail}
                error=""
              />
            </div>
            <div className="w-2/4">
              <InputTextForm
                label="Titular de la tarjeta"
                type="text"
                id="nameInput"
                placeholder="Nombre del titular"
                data={name}
                onChange={setName}
                error=""
              />
            </div>
          </div>

            <div className="w-full">
            <label className="text-text3 ">
              Tarjeta de crédito
            </label>
            <CardElement
              options={{
              style: {
                base: {
                fontSize: '15px',
                color: '#003000',
                },
                invalid: { color: '#9e2146' },
              },
              }}
              className="text-xl border-2 p-2.5 border-text1 rounded-lg w-full text-text1"
            />
            </div>

          <div className="w-full flex gap-4">
            <button
              onClick={onPay}
              disabled={!stripe}
              className="w-5/6 self-end bg-text1 text-color3 p-2 rounded-lg border-2 border-text1 hover:bg-color1 hover:text-text1 transition duration-300 text-ms"
            >
              Pagar {selectedCurrency} {convertedAmount}
            </button>
            <div className="w-1/6">
              <InputSelectForm
                label="Moneda"
                id="currencyInput"
                options={currencyOptions}
                data={selectedCurrency}
                error=""
                placeholder="Moneda"
                onChange={setSelectedCurrency}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-2/5 h-full flex justify-center items-center bg-color4">
        <div className="w-2/3 rounded-lg p-6">
          <h1 className="text-text1 text-3xl font-bold text-center mb-8">
            Datos del pago
          </h1>
          <div className="space-y-4 rounded-lg text-white">
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-4">
                <h4 className="text-base font-bold text-text3">
                  Precio original
                </h4>
                <h5 className="text-base font-medium text-black">
                  {selectedCurrency} {convertedOriginalPrice}
                </h5>
              </div>
              <div className="flex items-center justify-between gap-4">
                <h4 className="text-base font-bold text-text3">Descuento</h4>
                <h5 className="text-base font-medium text-green-500">
                  -{selectedCurrency} {convertedDiscount}
                </h5>
              </div>
              <div className="flex items-center justify-between gap-4">
                <h4 className="text-base font-bold text-text3">Impuestos</h4>
                <h5 className="text-base font-medium text-black">
                  {selectedCurrency} {convertedTaxAmount}
                </h5>
              </div>
              <div className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                <h4 className="text-base font-bold text-text3">Total</h4>
                <h5 className="text-base font-bold text-black">
                  {selectedCurrency} {convertedAmount}
                </h5>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-20">
            <Image
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-dark.svg"
              alt=""
              width={100}
              height={100}
            />
            <Image
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard-dark.svg"
              alt=""
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StripeForm;
