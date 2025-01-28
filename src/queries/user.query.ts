import { UserService } from '@/services/user.service';
import { useQuery } from '@tanstack/react-query';

export const useGetUserQuery = () =>
  useQuery({
    queryKey: ['user'],
    queryFn: UserService.getCurrentUser,
    staleTime: 20000,
  });
