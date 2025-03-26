import NotificationsPage from '@/components/pages/NotificationsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inicio',
  description: 'Página de inicio de la aplicación',
};

const NotificationsUser = async () => {

  return (
    <>
      <NotificationsPage />
    </>
  );
};

export default NotificationsUser;
