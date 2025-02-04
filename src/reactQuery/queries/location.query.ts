import { RouteQueryService } from '@/services/queries/route.queryService';
import { useQuery } from '@tanstack/react-query';

export const useLocationsQuery = () =>
  useQuery({
    queryKey: ['locations'],
    queryFn: async () => await RouteQueryService.getLocations(),
    staleTime: 20000,
  });
