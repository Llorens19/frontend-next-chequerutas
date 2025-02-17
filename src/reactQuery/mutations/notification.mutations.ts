import { NotificationCommandService } from '@/services/commands/notification.commandService';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDeleteNotificationMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (idNotification: string) => NotificationCommandService.deleteNotification(idNotification),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });
};

export const useReadNotificationMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (idNotification: string) => NotificationCommandService.readNotification(idNotification),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });
};