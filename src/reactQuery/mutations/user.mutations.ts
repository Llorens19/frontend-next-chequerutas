import { AuthService } from '@/services/auth/auth.service';
import { ILogin } from '@/shared/interfaces/services/user/login.interface';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useLoginMutation = () => {
  const queryClient = useQueryClient();
    const router = useRouter();

  return useMutation({
    mutationFn: (user: ILogin) => AuthService.login(user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      router.push('/');
    },
  });
};
