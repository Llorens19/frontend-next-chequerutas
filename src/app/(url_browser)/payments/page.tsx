import StripeForm from '@/components/payments/StripeForm';
import StripeProvider from '@/providers/stripe/StripeProvider';


const Payments = async () => {
  return (
    <>
      <StripeProvider>
        <StripeForm />
      </StripeProvider>
    </>
  );
};

export default Payments;
