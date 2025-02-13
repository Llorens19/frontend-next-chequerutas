'use client';
import { useCreateCommentMutation, useDeleteCommentMutation } from '@/reactQuery/mutations/comments.mutations';
import { useGetUserQuery } from '@/reactQuery/queries/user.query';
import { IComment } from '@/shared/interfaces/entities/comment.interface';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

const CardCommentProfile = ({ comment }: { comment: IComment }) => {


  const [isReplying, setIsReplying] = useState(false);
  const [body, setBody] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

    const commentCreate = useCreateCommentMutation();

  const deteteComment = useDeleteCommentMutation();


  const { data: userLogged } = useGetUserQuery();

  const deleteComment = () => {
    deteteComment.mutate(comment.idComment);
  };

  const replyComment = () => {
    setIsReplying(true);
  };

  const createSubComment = () => {
    commentCreate.mutate({
      body,
      idRoute: comment.idRoute,
      idParentComment: comment.idComment,
    });
  };

  useEffect(() => {
    if (isReplying && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isReplying]);

  return (
    <>
      <div className="w-full p-4 flex gap-8 bg-color2 rounded-lg">
        <div className=" w-1/12">
          <Image
            className="rounded-full h-auto"
            src={comment.user?.imgUser ?? '/images/profile/perfil.jpg'}
            alt={comment.body}
            width={50}
            height={50}
          />
        </div>
        <div className="w-11/12">
          <div className="flex gap-4 items-center">
            <a className="font-bold text-text4">{comment.user?.username}</a>
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

          <div className="flex gap-4 w-full justify-end ">
            {userLogged && comment.idUser === userLogged.idUser && (
              <a
                className="text-xs text-[#8e2525] hover:text-[#ff3a3a] transition"
                onClick={deleteComment}
              >
                Borrar
              </a>
            )}
            {!comment.idParentComment && userLogged && (
              <a
                className="text-xs text-text4 hover:text-text1 transition"
                onClick={replyComment}
              >
                Responder
              </a>
            )}
          </div>
        </div>
      </div>
      {isReplying && (
        <div className="ml-12 p-4 flex bg-color2 rounded-lg  ">
          <input
            ref={inputRef}
            type="text"
            className="w-full p-2 border rounded-lg bg-color1"
            placeholder="Escribe un comentario"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && body.trim() !== '') {
                createSubComment();
                setBody('');
                setIsReplying(false);
              }
            }}
            onBlur={() => setIsReplying(false)}
          />
        </div>
      )}

      {(comment.comments && comment.comments.length > 0 ) && (
        <div className="ml-12 flex flex-col gap-4">
          {comment.comments.map((comment: IComment) => (
            <CardCommentProfile comment={comment} key={comment.idComment} />
          ))}
        </div>
      )}
    </>
  );
};

export default CardCommentProfile;
