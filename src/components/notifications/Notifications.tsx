'use client';
import ListNotifications from '@/components/lists/ListNotifications';
import { useGetUserQuery } from '@/reactQuery/queries/user.query';

const Notifications = () => {

  const {data:userLogged, isLoading} = useGetUserQuery();
  return (
    <>
      <ListNotifications notifications={userLogged?.notifications || []} />
    </>
  );
};

export default Notifications;