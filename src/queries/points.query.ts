import { IRoutePointsFilters } from '@/interfaces/services/route/getRoutePoints.interface';
import { RouteService } from '@/services/route.service';
import { useQuery } from '@tanstack/react-query';

export const usePointsQuery = (filters: IRoutePointsFilters) =>
  useQuery({
    queryKey: ['routes', 'points', filters],
    queryFn: async () => await RouteService.getRoutePoints(filters),
    staleTime: 20000,
  });
