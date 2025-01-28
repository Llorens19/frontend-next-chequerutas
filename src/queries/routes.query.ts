import { RouteService } from '@/services/route.service';
import { useQuery } from '@tanstack/react-query';

export const useRoutesQuery = () =>
  useQuery({
    queryKey: ['routes'],
    queryFn: RouteService.getRoutes,
    staleTime: 20000,
  });
