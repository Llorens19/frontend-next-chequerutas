import { ProfileCommandService } from '@/services/commands/profile.commandService';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useProfileFollowMutation = (username: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:  (idFollowed: string) => ProfileCommandService.follow(idFollowed),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile', username] });
    },
  });
};

export const useProfileUnfollowMutation = (username: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:  (idUnFollowed: string) => ProfileCommandService.unfollow(idUnFollowed),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile', username] });
    },
  });
};