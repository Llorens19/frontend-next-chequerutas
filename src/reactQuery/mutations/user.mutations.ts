import { AuthService } from '@/services/auth/auth.service';
import { ILogin } from '@/shared/interfaces/services/user/login.interface';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useLoginMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (user: ILogin) => AuthService.login(user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });
};
