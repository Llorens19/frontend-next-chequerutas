import { IRoutePointsFilters } from '@/shared/interfaces/services/route/getRoutePoints.interface';
import { useQuery } from '@tanstack/react-query';
import { RouteQueryService } from '@/services/queries/route.queryService';

export const usePointsQuery = (filters: IRoutePointsFilters) =>
  useQuery({
    queryKey: ['routes', 'points', filters],
    queryFn: async () => await RouteQueryService.getRoutePoints(filters),
    staleTime: 20000,
  });
