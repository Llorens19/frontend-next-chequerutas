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
    // Obtener el clientSecret desde el backend Fastify
    axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/payment`, {
      amount: 100, // $1.00 USD (Stripe usa centavos)
      currency: 'usd',
    })
    .then(res => setClientSecret(res.data.clientSecret))
    .catch(err => console.error('Error al obtener clientSecret:', err));
  }, []);

  const handleSubmit = async (event:any) => {
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
    <form onSubmit={handleSubmit} className="w-1/2 mx-auto mt-44 bg-white" >
      <CardElement />
      <button type="submit" disabled={!stripe} className='text-contrast2'>Pagar</button>
    </form>
  );
};

export default StripeForm;
