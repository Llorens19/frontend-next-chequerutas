'use client';
import CommentCard from '@/components/comments/CommentCard';
import { useRuteCommentsQuery } from '@/reactQuery/queries/comments.query';
import { ICommentsRouteProps } from '@/shared/interfaces/components/comments/CommentsRoute.interface';
import { IComment } from '@/shared/interfaces/entities/comment.interface';

const CommentsRoute = ({ route }: ICommentsRouteProps) => {
  const { idRoute } = route;

  const { data, isLoading } = useRuteCommentsQuery(idRoute);

  if (data === undefined) {
    return <div>Loading...</div>;
  }

  const { comments } = data;
  console.log('Comments:', comments);

  return (
    <div className="flex flex-col gap-4 w-1/2 mx-auto ">
      <h1>Comments</h1>
      {comments &&
        comments.length > 0 &&
        comments.map((comment: IComment) => (
          <CommentCard comment={comment} key={comment.idComment} />
        ))}
    </div>
  );
};

export default CommentsRoute;
