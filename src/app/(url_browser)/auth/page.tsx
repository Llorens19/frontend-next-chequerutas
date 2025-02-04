import AuthContent from '@/components/auth/authContent';
import AuthGuard from '@/guards/logged.guard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login/Register',
  description: 'Página de autenticación de la aplicación',
};

const Auth = () => {
  return (
    <>
    <AuthGuard >
      <AuthContent />
    </AuthGuard>
    </>
  );
};

export default Auth;
