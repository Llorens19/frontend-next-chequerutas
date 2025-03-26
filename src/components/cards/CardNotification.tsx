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
  const onClickDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
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
      bg: 'bg-color2_selected',
      text: 'text-blue-800 dark:text-blue-400',
      border: 'border-transparent',
      btnBg: 'bg-blue-800 dark:bg-blue-600',
      btnHover: 'hover:bg-blue-900 dark:hover:bg-blue-700',
    },
    error: {
      bg: 'bg-color2_selected',
      text: 'text-red-800 dark:text-red-400',
      border: 'border-transparent',
      btnBg: 'bg-red-800 dark:bg-red-600',
      btnHover: 'hover:bg-red-900 dark:hover:bg-red-700',
    },
    success: {
      bg: 'bg-color2_selected',
      text: 'text-green-800 dark:text-green-400',
      border: 'border-transparent',
      btnBg: 'bg-green-800 dark:bg-green-600',
      btnHover: 'hover:bg-green-900 dark:hover:bg-green-700',
    },
    warning: {
      bg: 'bg-color2_selected',
      text: 'text-yellow-800 dark:text-yellow-300',
      border: 'border-transparent',
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
        <div className="flex items-center">
          {type}
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
