import ApiService from '@/services/apiService/api.service';
import { SERVER_NOTIFICATION } from '@/shared/constants/serverServices.constants';
import { INotification } from '@/shared/interfaces/entities/notification.interface';
import { INotificationInput } from '@/shared/interfaces/services/commands/notification/sendNotification.interfacet';

export const NotificationCommandService = {

  sendNotification:  (notification: INotificationInput): Promise<INotification> => {
    return ApiService.post<INotification>(`${SERVER_NOTIFICATION}/notification`, notification);
  },

  deleteNotification:  (idNotification: string): Promise<INotification> => {
    return ApiService.delete<INotification>(`${SERVER_NOTIFICATION}/notification/${idNotification}`);
  },

  readNotification:  (idNotification: string): Promise<INotification> => {
    return ApiService.put<INotification>(`${SERVER_NOTIFICATION}/notification/read/${idNotification}`);
  }
};