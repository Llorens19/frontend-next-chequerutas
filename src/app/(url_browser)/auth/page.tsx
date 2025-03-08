import AuthPage from '@/components/pages/AuthPage';
import IsNotLogged from '@/guards/NotLogged.guard';


import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login/Register',
  description: 'Página de autenticación de la aplicación',
};

const Auth = () => {
  return (
    <>
    <IsNotLogged >
      <AuthPage />
    </IsNotLogged>
    </>
  );
};

export default Auth;
