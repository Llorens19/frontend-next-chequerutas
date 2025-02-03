'use client';

import Login from '@/components/auth/Login';
import Register from '@/components/auth/Register';
import ImgAuth from '@/components/SVGs/ImgAuth';
import { useState } from 'react';

const AuthContent = () => {

  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };


  return (
    <>
        <div className="flex justify-center items-center h-screen">
        <div className="w-1/2 h-full flex justify-center items-center align-middle">
        <ImgAuth />
        </div>
        <div className="w-1/2 h-full flex justify-center items-center align-middle">
          <div className="w-full flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-text2 text-center">
              {isLogin ? 'Login' : 'Register'}
            </h2>

            {/* <div v-if="isLogin">
                    {/* <Login />
                    si
                </div>

                <div v-else>
                    {/* <Register />
                    no
                </div> */}
            <div>{isLogin ? <Login /> : <Register/>}</div>

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
    </>
  );
};

export default AuthContent;