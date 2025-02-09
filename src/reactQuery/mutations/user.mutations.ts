import { AuthCommandService } from '@/services/commands/auth.commandService';
import { ILogin } from '@/shared/interfaces/services/commands/auth/login.interface';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useLoginMutation = () => {
  const queryClient = useQueryClient();
    const router = useRouter();

  return useMutation({
    mutationFn: (user: ILogin) => AuthCommandService.login(user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      router.push('/');
    },
  });
};
