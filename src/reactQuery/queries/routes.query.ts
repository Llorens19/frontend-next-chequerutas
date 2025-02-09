import { ProfileQueryService } from '@/services/queries/profile.queryService';
import { RouteQueryService } from '@/services/queries/route.queryService';
import { IRouteFilters } from '@/shared/interfaces/services/queries/route/getRoutes.interface';
import { useQuery } from '@tanstack/react-query';

export const useRoutesQuery = (filters:IRouteFilters) =>
  useQuery({
    queryKey: ['routes', 'filters', filters],
    queryFn: async () => await RouteQueryService.getRoutes(filters),
    staleTime: 20000,
  });


  export const useRoutesUserPublic = (username: string) =>
    useQuery({
      queryKey: ['routes', username, 'public'],
      queryFn:async () => await ProfileQueryService.getRoutesUserPublic(username),
      staleTime: 20000,
    });


  export const useRoutesUserPrivate = (username: string) =>
    useQuery({
      queryKey: ['routes', username, 'private'],
      queryFn:async () => await ProfileQueryService.getRoutesUserPrivate(username),
      staleTime: 20000,
    });

  export const useRouteQuery = (idRoute: string) =>
    useQuery({
      queryKey: ['route', idRoute],
      queryFn:async () => await RouteQueryService.getRouteById(idRoute),
      staleTime: 20000,
    });
