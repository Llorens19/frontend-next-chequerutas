'use client';
import CommentCard from '@/components/comments/CommentCard';
import { useUserCommentsQuery } from '@/reactQuery/queries/comments.query';
import { IListCommentsProfileProps } from '@/shared/interfaces/components/lists/ListCommentsProfile';
import { IComment } from '@/shared/interfaces/entities/comment.interface';

const ListCommentsProfile = ({ username }: IListCommentsProfileProps) => {
  const { data: comments, isLoading } = useUserCommentsQuery(username);


  if (isLoading === undefined) return <div>Loading...</div>;


  return (
    <div className="w-full flex flex-col gap-4 mx-auto  ">
      {comments &&
        comments.comments.map((comment: IComment) => (

          console.log(comment.user.username),
          <CommentCard comment={comment} key={comment.idComment} />
        ))}
    </div>
  );
};

export default ListCommentsProfile;
