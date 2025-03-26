'use client';
import ListNotifications from '@/components/lists/ListNotifications';
import ListNotificationsMobile from '@/compontesPhone/lists/ListNotificationsMobile';
import useMobile from '@/hooks/useMobile.hook';
import { useGetUserQuery } from '@/reactQuery/queries/user.query';

const NotificationsPage = () => {
  const isMobile = useMobile();
  const { data: userLogged } = useGetUserQuery();
  return (
    <>
      {isMobile ? (
        <ListNotificationsMobile notifications={userLogged?.notifications || []} />
      ) : (
        <ListNotifications notifications={userLogged?.notifications || []} />
      )}
    </>
  );
};

export default NotificationsPage;
