'use client';

import { useState, useEffect } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import { StripeCardElement } from '@stripe/stripe-js';

const StripeForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/payment`, {
      amount: 100, // $1.00 USD (Stripe usa centavos)
      currency: 'usd',
    })
    .then(res => setClientSecret(res.data.clientSecret))
    .catch(err => console.error('Error al obtener clientSecret:', err));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement) as StripeCardElement,
      },
    });

    if (error) {
      console.error('Error en el pago:', error);
    } else {
      console.log('Pago exitoso:', paymentIntent);
    }
  };

  return (
    <section className="bg-text1 py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-text1 sm:text-2xl">Payment</h2>
          <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
            <form onSubmit={handleSubmit} className="w-full rounded-lg border border-gray-200 bg-text1 p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:max-w-xl lg:p-8">
              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-text1">Card Details*</label>
                <CardElement className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-text1 dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" />
              </div>
              <button type="submit" disabled={!stripe} className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-text1 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Pay now</button>
            </form>
            <div className="mt-6 grow sm:mt-8 lg:mt-0">
              <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Total</dt>
                  <dd className="text-base font-bold text-gray-900 dark:text-text1">$1.00</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StripeForm;
