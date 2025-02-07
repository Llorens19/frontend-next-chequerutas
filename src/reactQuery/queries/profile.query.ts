import { ProfileQueryService } from '@/services/queries/profile.queryService';
import { useQuery } from '@tanstack/react-query';

export const useProfileQuery = (username: string) =>
  useQuery({
    queryKey: ['profile', username],
    queryFn:async () => await ProfileQueryService.getProfileByUsername(username),
    staleTime: 20000,
  });

export const useRoutesUserPublic = (username: string) =>
  useQuery({
    queryKey: ['routes', username, 'public'],
    queryFn:async () => await ProfileQueryService.getRoutesUserPublic(username),
    staleTime: 20000,
  });

export const useRoutesUserPrivate = (username: string) =>
  useQuery({
    queryKey: ['routes', username, 'private'],
    queryFn:async () => await ProfileQueryService.getRoutesUserPrivate(username),
    staleTime: 20000,
  });
