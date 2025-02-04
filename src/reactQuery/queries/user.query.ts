
import { AuthService } from '@/services/auth/auth.service';
import { useQuery } from '@tanstack/react-query';

export const useGetUserQuery = () =>
  useQuery({
    queryKey: ['user'],
    queryFn: AuthService.getCurrentUser
  });
