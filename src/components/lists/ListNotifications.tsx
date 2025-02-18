import CardNotification from '@/components/cards/CardNotification';
import { useReadNotificationMutation } from '@/reactQuery/mutations/notification.mutations';
import { INotification } from '@/shared/interfaces/entities/notification.interface';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ListNotifications = ({
  notifications,
}: {
  notifications: INotification[];
}) => {
  const [notificationSelected, setNotificationSelected] =
    useState<INotification | null>(null);

    const readNotification = useReadNotificationMutation();

  const onClickMesage = (notification: INotification) => {
    setNotificationSelected(notification);
    if (!notification.readed) {
      readNotification.mutate(notification.idNotification);
    }
  };

  const [sortedNotifications, setSortedNotifications] = useState<INotification[]>([]);

  useEffect(() => {
    setSortedNotifications(notifications.sort((a, b) => new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()));
  }, [notifications]);

  return (
    <>
    <h1 className="text-5xl text-text1 text-center font-bold mb-8 mt-20 bg-color1">
    Notificaciones
  </h1>
    <div className="flex justify-center mt-12 w-4/5 mx-auto">
      <div className="w-1/2 ">

        {sortedNotifications.map((notification) => {
            if (notification.deleted === false) {

          return (
            <div
              key={notification.idNotification}
              onClick={() => onClickMesage(notification)}
            >
              <CardNotification
                key={notification.idNotification}
                notification={notification}
              />
            </div>
          );

          }
          return null;
        })}

        {(!notifications || notifications.length === 0 || notifications.every(notification => notification.deleted)) && (
            <h2 className="text-2xl text-text1 text-center">No hay notificaciones</h2>
          )}




      </div>
      {notificationSelected && (
        <div className="w-1/2 ">
          <div className="w-full mx-20 bg-color2 rounded-3xl p-8">
            <div className="flex gap-4 items-center">
              <Image
                src="/images/chequerutas_logo.svg"
                alt="profile"
                width={50}
                height={50}
                className="rounded-full border-2 border-contrast2"
              />

              <div className="flex items-center">
                <span className="text-lg font-medium text-text1">
                  CheQueCasas
                </span>
              </div>
            </div>
            <p className="text-text1 mt-4">
              <span className="">Tipo: </span>
              <span
              className={
                notificationSelected.type === 'info'
                ? 'text-blue-500 font-black'
                : notificationSelected.type === 'warning'
                ? 'text-yellow-500 font-black'
                : notificationSelected.type === 'success'
                ? 'text-green-500 font-black'
                : 'text-red-500 font-black'
              }
              >
              {notificationSelected.type === 'info' && 'Informativo'}
              {notificationSelected.type === 'warning' && 'Advertencia'}
              {notificationSelected.type === 'success' && 'Realizado'}
              {notificationSelected.type === 'error' && 'Error'}
              </span>
            </p>
            <h3 className="text-lg text-text1 mt-4">
              Asunto:{' '}
              <span className="font-bold">
                {notificationSelected.title}
              </span>
            </h3>
            <p className="text-text1 mt-4">{notificationSelected.body}</p>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default ListNotifications;
