import { CommentQueryService } from '@/services/queries/comment.queryService';
import { useQuery } from '@tanstack/react-query';

export const useRuteCommentsQuery = (idRoute: string) =>
  useQuery({
    queryKey: ['comments', idRoute],
    queryFn: async () => await CommentQueryService.getCategories(idRoute),
    staleTime: 20000,
  });
