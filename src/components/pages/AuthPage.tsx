'use client';

import Login from '@/components/auth/Login';
import Register from '@/components/auth/Register';
import RegisterMobile from '@/compontesPhone/auth/RegisterMobile';
import useMobile from '@/hooks/useMobile.hook';
import { useState } from 'react';

const AuthPage = () => {
  const styles = {
    backgroundImage: 'url(\'/images/auth/auth.jpg\')',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
  };

  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const isMobile = useMobile();

  return (
    <>
      {isMobile ? (
        <div className="w-full flex flex-col gap-6 justify-center items-center align-middle h-screen pb-20 p-6 ">
          <h2 className="text-2xl font-bold text-text2 text-center">
            {isLogin ? 'Login' : 'Register'}
          </h2>

          <div className="w-full mx-auto">
            {isLogin ? <Login /> : <RegisterMobile />}
          </div>

          <p className="text-center text-text3">
            {isLogin
              ? '¿Aún no tienes una cuenta? '
              : '¿Ya tientes una cuenta? '}
            <button
              className="text-contrast2 underline hover:text-contrast2_hover transition"
              onClick={toggleForm}
            >
              {isLogin ? 'Registrarse' : 'Logearse'}
            </button>
          </p>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <div
            style={styles}
            className="w-3/5 h-full flex justify-center items-center align-middle "
          ></div>
          <div className="w-2/5  flex justify-center items-center align-middle mt-16">
            <div className="w-full flex flex-col gap-6">
              <h2 className="text-2xl font-bold text-text2 text-center">
                {isLogin ? 'Login' : 'Register'}
              </h2>

              <div className="w-2/3 mx-auto">
                {isLogin ? <Login /> : <Register />}
              </div>

              <p className="text-center text-text3">
                {isLogin
                  ? '¿Aún no tienes una cuenta? '
                  : '¿Ya tientes una cuenta? '}
                <button
                  className="text-contrast2 underline hover:text-contrast2_hover transition"
                  onClick={toggleForm}
                >
                  {isLogin ? 'Registrarse' : 'Logearse'}
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthPage;
