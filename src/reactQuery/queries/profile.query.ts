import { ProfileQueryService } from '@/services/queries/profile.queryService';
import { useQuery } from '@tanstack/react-query';

export const useProfileQuery = (username: string) =>
  useQuery({
    queryKey: ['profile', username],
    queryFn:async () => await ProfileQueryService.getProfileByUsername(username),
    staleTime: 20000,
  });
