import { RouteCommandService } from '@/services/commands/route.commandService';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useFavoriteMutation = (idRoute: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (idRoute: string) => RouteCommandService.favoriteRoute(idRoute),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['route', idRoute], });
      queryClient.invalidateQueries({ queryKey: ['favorites'], });
    },
  });
};

export const useUnfavoriteMutation = (idRoute: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (idRoute: string) => RouteCommandService.unfavoriteRoute(idRoute),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['route', idRoute], });
      queryClient.invalidateQueries({ queryKey: ['favorites'], });
    },
  });
};
