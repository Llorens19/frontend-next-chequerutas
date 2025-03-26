import { RouteCommandService } from '@/services/commands/route.commandService';
import { ICreteRouteInput } from '@/shared/interfaces/services/commands/routes/createRoute.interface';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateRouteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (route:ICreteRouteInput) => RouteCommandService.createRoute(route),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['route'], });
      queryClient.invalidateQueries({ queryKey: ['routes'], });
    },
  });
};

export const useDeleteRouteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (routeId: string) => RouteCommandService.deleteRoute(routeId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['route'], });
      queryClient.invalidateQueries({ queryKey: ['routes'], });
    },
  });
};
