import { IRouteFilters } from '@/interfaces/services/route/getRoutes.interface';
import { RouteService } from '@/services/route.service';
import { useQuery } from '@tanstack/react-query';

export const useRoutesQuery = (filters:IRouteFilters) =>
  useQuery({
    queryKey: ['routes', filters],
    queryFn: async () => await RouteService.getRoutes(filters),
    staleTime: 20000,
  });
