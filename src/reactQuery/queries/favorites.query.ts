import { ProfileQueryService } from '@/services/queries/profile.queryService';
import { useQuery } from '@tanstack/react-query';

export const useFavoriteUserQuery = () =>
  useQuery({
    queryKey: ['favorites'],
    queryFn: ProfileQueryService.getFavorites,
  });
