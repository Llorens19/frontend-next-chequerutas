import { CommentQueryService } from '@/services/queries/comment.queryService';
import { useQuery } from '@tanstack/react-query';

export const useRuteCommentsQuery = (idRoute: string) =>
  useQuery({
    queryKey: ['comments', idRoute],
    queryFn: async () => await CommentQueryService.getRouteComments(idRoute),
    staleTime: 20000,
  });

export const useUserCommentsQuery = (username: string) =>
  useQuery({
    queryKey: ['comments', username],
    queryFn: async () => await CommentQueryService.getUserComments(username),
    staleTime: 20000,
  });
