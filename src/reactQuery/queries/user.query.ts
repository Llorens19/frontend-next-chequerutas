import { AuthQueryService } from '@/services/queries/auth.queryService';
import { useQuery } from '@tanstack/react-query';

export const useGetUserQuery = () =>
  useQuery({
    queryKey: ['user'],
    queryFn: AuthQueryService.getCurrentUser,
    staleTime: 20000,
  });
