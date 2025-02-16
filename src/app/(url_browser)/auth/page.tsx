import AuthContent from '@/components/auth/authContent';
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
      <AuthContent />
    </IsNotLogged>
    </>
  );
};

export default Auth;
