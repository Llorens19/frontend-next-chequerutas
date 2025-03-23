import CardNotification from '@/components/cards/CardNotification';
import { useReadNotificationMutation } from '@/reactQuery/mutations/notification.mutations';
import { INotification } from '@/shared/interfaces/entities/notification.interface';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ListNotificationsMobile = ({
  notifications,
}: {
  notifications: INotification[];
}) => {
  const [notificationSelected, setNotificationSelected] =
    useState<INotification | null>(null);
  const [sortedNotifications, setSortedNotifications] = useState<
    INotification[]
  >([]);
  const readNotification = useReadNotificationMutation();

  useEffect(() => {
    setSortedNotifications(
      notifications.sort(
        (a, b) =>
          new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
      )
    );
  }, [notifications]);

  useEffect(() => {
    const handleBackButton = () => {
      if (notificationSelected) {
        setNotificationSelected(null);
        return true;
      }
      return false;
    };

    const onPopState = () => {
      handleBackButton();
    };

    window.addEventListener('popstate', onPopState);
    return () => {
      window.removeEventListener('popstate', onPopState);
    };
  }, [notificationSelected]);

  const onClickMessage = (notification: INotification) => {
    setNotificationSelected(notification);
    if (!notification.readed) {
      readNotification.mutate(notification.idNotification);
    }
    window.history.pushState(null, '', window.location.href);
  };

  const onClickBack = () => {
    setNotificationSelected(null);
    window.history.back();
  };

  return (
    <div className="w-screen min-h-screen p-4">
      {!notificationSelected ? (
        <>
          <h1 className="text-3xl text-text1 text-center font-bold mb-6">
            Notificaciones
          </h1>
          <div className="flex flex-col gap-4">
            {sortedNotifications.length > 0 ? (
              sortedNotifications.map((notification) =>
                !notification.deleted ? (
                  <div
                    key={notification.idNotification}
                    onClick={() => onClickMessage(notification)}
                  >
                    <CardNotification notification={notification} />
                  </div>
                ) : null
              )
            ) : (
              <h2 className="text-xl text-text1 text-center">
                No hay notificaciones
              </h2>
            )}
          </div>
        </>
      ) : (
        <div className="w-full flex flex-col items-center">
          <p
            className="text-text1 text-lg whitespace-pre hover:underline cursor-pointer font-bold"
            onClick={onClickBack}
          >
            ← Volver
          </p>
          <div className="bg-color2 rounded-3xl p-6 w-full max-w-md">
            <div className="flex gap-4 items-center">
              <Image
                src="/images/chequerutas_logo.svg"
                alt="profile"
                width={50}
                height={50}
                className="rounded-full border-2 border-contrast2"
              />
              <span className="text-lg font-medium text-text1">
                CheQueCasas
              </span>
            </div>
            <p className="text-text1 mt-4">
              <span className="font-semibold">Tipo: </span>
              <span
                className={
                  notificationSelected.type === 'info'
                    ? 'text-blue-500 font-bold'
                    : notificationSelected.type === 'warning'
                    ? 'text-yellow-500 font-bold'
                    : notificationSelected.type === 'success'
                    ? 'text-green-500 font-bold'
                    : 'text-red-500 font-bold'
                }
              >
                {notificationSelected.type === 'info' && 'Informativo'}
                {notificationSelected.type === 'warning' && 'Advertencia'}
                {notificationSelected.type === 'success' && 'Realizado'}
                {notificationSelected.type === 'error' && 'Error'}
              </span>
            </p>
            <h3 className="text-lg text-text1 mt-4 font-bold">
              {notificationSelected.title}
            </h3>
            <p className="text-text1 mt-4">{notificationSelected.body}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListNotificationsMobile;
