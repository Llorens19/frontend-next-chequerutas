import Notifications from '@/components/notifications/Notifications';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inicio',
  description: 'Página de inicio de la aplicación',
};

const NotificationsUser = async () => {

  return (
    <>
      <Notifications />
    </>
  );
};

export default NotificationsUser;
