'use client';
import InputTextForm from '@/components/inputs/InputTextForm';
import { useLoginMutation } from '@/reactQuery/mutations/user.mutations';
import { emailRegex } from '@/shared/utils/regex/emailRegex.util';
import { passwordRegex } from '@/shared/utils/regex/passwordRegex.util';
import React, { useState } from 'react';



const Login = () => {
  const loginMutation = useLoginMutation();





  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');


  const validateLogin = (): boolean => {
    const error_email = emailRegex(email);
    const error_password = passwordRegex(password);
    setErrorEmail(error_email);
    setErrorPassword(error_password);
    if (error_email || error_password) {
        return false;
    }
    return true;
};



  const handleLogin = () => {
    if (validateLogin()) {

      loginMutation.mutate(
        { email, password },
        {
          onError: (error) => {
        console.error('Login error:', error);
          },
        }
      );

    }
  };

  return (
    <div className="flex flex-col gap-6">
      <InputTextForm
        label="Email"
        type="email"
        id="email_input_login"
        placeholder="ejemplo123@email.com"
        data={email}
        onChange={setEmail}
        error={errorEmail}
      />

      <InputTextForm
        label="Contraseña"
        type="password"
        id="password_input_login"
        placeholder="contraseña1234"
        data={password}
        onChange={setPassword}
        error={errorPassword}
      />

      <button
        className="bg-white text-color3 p-1.5 rounded-lg border-2 border-white hover:bg-color1 hover:text-white transition duration-300 text-ms"
        onClick={handleLogin}
      >
        Logearse
      </button>
    </div>
  );
};

export default Login;