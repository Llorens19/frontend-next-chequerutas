import { CommentCommandService } from '@/services/commands/comment.commandService';
import { ICreateComment } from '@/shared/interfaces/services/commands/comment/createComment.interface';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateCommentMutation = (idRoute: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (comment: ICreateComment) => CommentCommandService.createComment(comment),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', idRoute] });
    },
  });
};

export const useDeleteCommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (idComment: string) => CommentCommandService.deleteComment(idComment),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
    },
  });
};
