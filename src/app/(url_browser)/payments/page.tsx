import CardProduct from '@/components/cards/CardProduct';

const Payments = async () => {
  return (
    <>
      {/* <StripeProvider>
        <StripeForm amount={1000} />
      </StripeProvider> */}
      <section className="flex flex-col gap-16 items-center justify-center text-center mt-20">
        <h1 className="text-text3 text-5xl font-bold">Suscripciones</h1>

        <div className="flex gap-8 items-center justify-center">
          <CardProduct popular={false} />
          <CardProduct popular={true} />
          <CardProduct popular={false} />
        </div>
      </section>
    </>
  );
};

export default Payments;
