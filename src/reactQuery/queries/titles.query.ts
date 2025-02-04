import { RouteQueryService } from '@/services/queries/route.queryService';
import { useQuery } from '@tanstack/react-query';

export const useRouteTitlesQuery = () =>
  useQuery({
    queryKey: ['routes', 'titles'],
    queryFn: async () => await RouteQueryService.getTitles(),
    staleTime: 20000,
  });
