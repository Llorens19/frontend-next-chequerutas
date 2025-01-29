import { RouteService } from '@/services/route.service';
import { useQuery } from '@tanstack/react-query';

export const useLocationQuery = () =>
  useQuery({
    queryKey: ['locations'],
    queryFn: async () => await RouteService.getLocations(),
    staleTime: 20000,
  });
