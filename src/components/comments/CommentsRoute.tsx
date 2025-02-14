'use client';
import CommentCard from '@/components/comments/CommentCard';
import CommentCreate from '@/components/comments/CommentCreate';
import CommentCardSkeleton from '@/components/comments/skeletons/CommentCardSkeleton';
import { useRuteCommentsQuery } from '@/reactQuery/queries/comments.query';
import { useGetUserQuery } from '@/reactQuery/queries/user.query';
import { ICommentsRouteProps } from '@/shared/interfaces/components/comments/CommentsRoute.interface';
import { IComment } from '@/shared/interfaces/entities/comment.interface';

const CommentsRoute = ({ idRoute }: ICommentsRouteProps) => {
  const { data:routeComments, isLoading:isLoadingComments } = useRuteCommentsQuery(idRoute);
  const { data: userLogged, isLoading } = useGetUserQuery();

  if (routeComments === undefined) {
    return <div>Loading...</div>;
  }

  const { comments } = routeComments;

  const charging = isLoading || isLoadingComments;




  return (
    <div className="flex flex-col gap-4 w-3/5 mx-auto my-8">
      { userLogged && <CommentCreate idRoute={idRoute} />}

      {!charging &&comments &&
        comments.map((comment: IComment) => (
          <CommentCard comment={comment} key={comment.idComment} />
        ))}

      {charging &&
        [1, 2, 3, 4, 5].map((n) => <CommentCardSkeleton key={n}
        />)}
    </div>
  );
};

export default CommentsRoute;
