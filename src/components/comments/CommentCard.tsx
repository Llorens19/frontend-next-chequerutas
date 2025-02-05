import { IComment } from '@/shared/interfaces/entities/comment.interface';
import Image from 'next/image';

const CommentCard = ({ comment }: { comment: IComment }) => {

  console.log(comment.idParentComment);
  return (
    <>
      <div className="p-4 flex gap-8 bg-color2 rounded-lg">
        <div className=" w-1/12">
          <Image
            className="rounded-full h-auto"
            src={comment.user.imgUser ?? '/images/profile/perfil.jpg'}
            alt={comment.body}
            width={50}
            height={50}
          />
        </div>
        <div className="w-11/12">
          <div className="flex gap-4 items-center">
            <a className="font-bold text-text4">{comment.user.username}</a>
            <p className="text-xs text-text3">
              {new Date(comment.createdAt!).toLocaleDateString()}
            </p>
          </div>
          {comment.imgComment && (
            <div className="w-1/2 mx-auto">
              <Image
                className="rounded-lg"
                src={comment.imgComment || '/images/profile/perfil.jpg'}
                alt={comment.body}
                width={100}
                height={100}
              />
            </div>
          )}
          <p className="text-sm">{comment.body}</p>

        {!comment.idParentComment && <div className="w-full text-text4 flex justify-end hover:text-white transition">
            <p className="text-xs">Responder</p>
          </div>}

        </div>
      </div>
      {comment.comments && comment.comments.length > 0 && (
        <div className="ml-12 flex flex-col gap-4">

            {comment.comments.map((comment: IComment) => (
              <CommentCard comment={comment} key={comment.idComment} />
            ))}
        </div>
      )}
    </>
  );
};

export default CommentCard;
