import AuthContent from '@/components/auth/authContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login/Register',
  description: 'Página de autenticación de la aplicación',
};

const Auth = async () => {
  return (
    <>
      <AuthContent />
    </>
  );
};

export default Auth;
