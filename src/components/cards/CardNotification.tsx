import { useDeleteNotificationMutation } from '@/reactQuery/mutations/notification.mutations';
import { INotification } from '@/shared/interfaces/entities/notification.interface';
import Image from 'next/image';

const CardNotification = ({
  notification,
}: {
  notification: INotification;
}) => {
  const { idNotification, title,  type, readed } = notification;

  const deleteNotification = useDeleteNotificationMutation();
  const onClickDelete = () => {
    deleteNotification.mutate(idNotification);
  };


  const typeStyles: Record<
    string,
    {
      bg: string;
      text: string;
      border: string;
      btnBg: string;
      btnHover: string;
    }
  > = {
    info: {
      bg: 'bg-color3',
      text: 'text-blue-800 dark:text-blue-400',
      border: 'border-blue-300 dark:border-blue-800',
      btnBg: 'bg-blue-800 dark:bg-blue-600',
      btnHover: 'hover:bg-blue-900 dark:hover:bg-blue-700',
    },
    error: {
      bg: 'bg-color3',
      text: 'text-red-800 dark:text-red-400',
      border: 'border-red-300 dark:border-red-800',
      btnBg: 'bg-red-800 dark:bg-red-600',
      btnHover: 'hover:bg-red-900 dark:hover:bg-red-700',
    },
    success: {
      bg: 'bg-color3',
      text: 'text-green-800 dark:text-green-400',
      border: 'border-green-300 dark:border-green-800',
      btnBg: 'bg-green-800 dark:bg-green-600',
      btnHover: 'hover:bg-green-900 dark:hover:bg-green-700',
    },
    warning: {
      bg: 'bg-color3',
      text: 'text-yellow-800 dark:text-yellow-300',
      border: 'border-yellow-300 dark:border-yellow-800',
      btnBg: 'bg-yellow-800 dark:bg-yellow-300 text-gray-800',
      btnHover: 'hover:bg-yellow-900 dark:hover:bg-yellow-400',
    },
  };

  if (!typeStyles[type]) return null;



  return (
    <div
      className={`p-4 mb-4 border-2 rounded-3xl ${readed ? 'bg-color2' : typeStyles[type].bg} ${typeStyles[type].text} ${typeStyles[type].border}`}
      role="alert"
    >
      <div className="flex gap-4 items-center">
        <Image
          src="/images/chequerutas_logo.svg"
          alt="profile"
          width={30}
          height={30}
          className="rounded-full border-2 border-contrast2"
        />

        <div className="flex items-center">
          <span className="text-sm font-medium text-text1">CheQueCasas</span>
        </div>
      </div>

      <div className="flex items-center">
        <span className="text-lg text-text1">Asunto: <span className="font-bold">{title}</span></span>
      </div>
      <div className="w-full flex justify-end">
        <button
          type="button"
          className="text-red-800 bg-transparent border-2 transition border-red-800 hover:bg-red-800 hover:text-color2 focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-3 py-1.5"
          onClick ={onClickDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CardNotification;
