'use client';
import CardProduct from '@/components/cards/CardProduct';
import StripeForm from '@/components/payments/StripeForm';
import CardProductMobile from '@/compontesPhone/cards/CardProductMobile';
import StripeFormMobile from '@/compontesPhone/payments/StripeFormMobile';
import IsNotPremium from '@/guards/NotPremium.guard';
import useMobile from '@/hooks/useMobile.hook';
import StripeProvider from '@/providers/stripe/StripeProvider';
import { useGetUserQuery } from '@/reactQuery/queries/user.query';
import { IStripeFormProps } from '@/shared/interfaces/components/payments/StripeForm.interface';
import { useRouter } from 'next/navigation';
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

const PaymentsPage = () => {
  const [isPaying, setIsPaying] = useState(false);
  const { data: userLogged } = useGetUserQuery();
  const router = useRouter();
  const isMobile = useMobile();

  const [product, setProduct] = useState<IStripeFormProps>({
    time: '1m',
    amount: 0,
    tax: 0,
  });

  const onSubscribeCard1 = () => {
    router.push('/auth');
  };

  const onSubscribeCard2 = () => {
    if (!userLogged) {
      router.push('/auth');
    }
    setIsPaying(true);
    setProduct({
      time: '1y',
      amount: 5988,
      tax: 0.21,
      savings: 0.1651,
    });
  };

  const onSubscribeCard3 = () => {
    if (!userLogged) {
      router.push('/auth');
    }
    setIsPaying(true);
    setProduct({
      time: '1m',
      amount: 499,
      tax: 0.21,
    });
  };

  return (
    <>
      <IsNotPremium>
        {isMobile ? (
          <>
            {isPaying ? (
              <StripeProvider>
                <StripeFormMobile
                  amount={product.amount}
                  tax={product.tax}
                  savings={product.savings}
                  time={product.time}
                />
              </StripeProvider>
            ) : (
              <div className="flex flex-col gap-4 items-center justify-center p-4 pb-20">
                <h1 className="text-text3 text-5xl font-bold mb-8">
                  Suscripciones
                </h1>
                <CardProductMobile
                  popular={false}
                  title={'Suscipción Gratuita'}
                  description={description1}
                  amountEur={0}
                  isButtonEnabled={!userLogged}
                  onSubscribe={onSubscribeCard1}
                />
                <CardProductMobile
                  popular={true}
                  title={'Suscipción Anual'}
                  description={description2}
                  amountEur={5988}
                  savings={0.1651}
                  isButtonEnabled={true}
                  onSubscribe={onSubscribeCard2}
                />
                <CardProductMobile
                  popular={false}
                  title={'Suscipción Mensual'}
                  description={description3}
                  amountEur={499}
                  isButtonEnabled={true}
                  onSubscribe={onSubscribeCard3}
                />
              </div>
            )}
          </>
        ) : (
          <>
            {isPaying ? (
              <StripeProvider>
                <StripeForm
                  amount={product.amount}
                  tax={product.tax}
                  savings={product.savings}
                  time={product.time}
                />
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
                    isButtonEnabled={!userLogged}
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
        )}
      </IsNotPremium>
    </>
  );
};

export default PaymentsPage;
