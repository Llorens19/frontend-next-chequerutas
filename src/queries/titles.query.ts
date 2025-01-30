import { RouteService } from '@/services/route.service';
import { useQuery } from '@tanstack/react-query';

export const useRouteTitlesQuery = () =>
  useQuery({
    queryKey: ['routes', 'titles'],
    queryFn: async () => await RouteService.getTitles(),
    staleTime: 20000,
  });
