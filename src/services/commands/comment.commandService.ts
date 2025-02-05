import ApiService from '@/services/apiService/api.service';
import { IComment } from '@/shared/interfaces/entities/comment.interface';
import { ICreateComment } from '@/shared/interfaces/services/commands/comment/createComment.interface';

export const CommentCommandService = {
  createComment: async (data: ICreateComment): Promise<IComment> => {
    return ApiService.post<IComment>('comments', data);
  },

  deleteComment: async (idComment: string): Promise<void> => {
    return ApiService.delete<void>(`comments/${idComment}`);
  },

};
