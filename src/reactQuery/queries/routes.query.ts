import { RouteQueryService } from '@/services/queries/route.queryService';
import { IRouteFilters } from '@/shared/interfaces/services/route/getRoutes.interface';
import { useQuery } from '@tanstack/react-query';

export const useRoutesQuery = (filters:IRouteFilters) =>
  useQuery({
    queryKey: ['routes', 'filters', filters],
    queryFn: async () => await RouteQueryService.getRoutes(filters),
    staleTime: 20000,
  });
