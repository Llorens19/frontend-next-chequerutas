'use client';
import CardProduct from '@/components/cards/CardProduct';
import StripeForm from '@/components/payments/StripeForm';
import StripeProvider from '@/providers/stripe/StripeProvider';
import { IStripeFormProps } from '@/shared/interfaces/components/payments/StripeForm.interface';
import { useState } from 'react';

const description1 = [
  { status: 1, message: 'Acceso a las rutas de la comunidad' },
  { status: 0, message: 'Exporta las rutas a tu GPS' },
  { status: 0, message: 'Obtén un distintivo Premium' },
  { status: 0, message: 'Importar rutas de otras Plataformas' },
];
const description2 = [
  { status: 1, message: '1 Año de suscripcion premium' },
  { status: 1, message: 'Exporta las rutas a tu GPS' },
  { status: 1, message: 'Obtén un distintivo Premium' },
  { status: 1, message: 'Importar rutas de otras Plataformas' },
];

const description3 = [
  { status: 1, message: '1 Mes de suscripción premium' },
  { status: 1, message: 'Exporta las rutas a tu GPS' },
  { status: 1, message: 'Obtén un distintivo Premium' },
  { status: 1, message: 'Importar rutas de otras Plataformas' },
];

const Payments = () => {
  const [isPaying, setIsPaying] = useState(false);

  const [product, setProduct] = useState<IStripeFormProps>({
    amount: 0,
    tax: 0,
  });



  const onSubscribeCard1 = () => {
    console.log('1...');
  };

  const onSubscribeCard2 = () => {
    setIsPaying(true);
    setProduct({
      amount: 5988 ,
      tax: 0.21,
      savings: 0.1651,
    });
  };

  const onSubscribeCard3 = () => {
    setIsPaying(true);
    setProduct({
      amount: 499 ,
      tax: 0.21,
    });
  };

  return (
    <>
      {isPaying ? (
        <StripeProvider>
          <StripeForm amount={product.amount} tax={product.tax} savings={product.savings} />
        </StripeProvider>
      ) : (
        <section className="flex flex-col gap-16 items-center justify-center text-center mt-20">
          <h1 className="text-text3 text-5xl font-bold">Suscripciones</h1>

          <div className="flex gap-8 items-center justify-center">
            <CardProduct
              popular={false}
              title={'Suscipción Gratuita'}
              description={description1}
              amountEur={0}
              isButtonEnabled={false}
              onSubscribe={onSubscribeCard1}
            />
            <CardProduct
              popular={true}
              title={'Suscipción Anual'}
              description={description2}
              amountEur={5988}
              savings={0.1651}
              isButtonEnabled={true}
              onSubscribe={onSubscribeCard2}
            />
            <CardProduct
              popular={false}
              title={'Suscipción Mensual'}
              description={description3}
              amountEur={499}
              isButtonEnabled={true}
              onSubscribe={onSubscribeCard3}
            />
          </div>
        </section>
      )}
    </>
  );
};

export default Payments;
