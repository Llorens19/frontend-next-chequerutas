'use client';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

console.log('Stripe Key:', process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string;

// if (!stripeKey) {
//   throw new Error('La clave pública de Stripe no está configurada en las variables de entorno');
// }

const stripePromise = loadStripe(stripeKey);

const StripeProvider = ({ children }: any) => {
  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeProvider;