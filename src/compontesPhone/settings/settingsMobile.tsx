'use client';

import ChangeThemeMobile from '@/compontesPhone/theme/ChangeThemeMobile';
import { useGetUserQuery } from '@/reactQuery/queries/user.query';
import { useRouter } from 'next/navigation';

const SettingsMobile = () => {
  const router = useRouter();
  const { data: user } = useGetUserQuery();

  const onClickPayments = () => {
    router.push('/payments');
  };

  return (
    <>
      <div className="w-screen h-screen flex flex-col px-4 pt-8 gap-2">
        <h1 className="text-text3 text-5xl font-bold mb-8 w-full text-center">
          Ajustes
        </h1>

        {user?.premiumLevel && user?.premiumLevel > 0 ? (
          ''
        ) : (
          <div
            className="w-full text-text1 border-2 border-color5 rounded-full p-2 text-xl text-center font-bold bg-color1"
            onClick={onClickPayments}
          >
            Suscripciones
          </div>
        )}

        <div className="w-full text-text1 border-2 border-color5 rounded-full p-2 text-xl text-center font-bold bg-color1">
          <div className="flex w-full items-center">
            <div className=" w-1/2 text-center">Cambiar tema</div>
            <div className=" w-1/2">
              <ChangeThemeMobile />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsMobile;
