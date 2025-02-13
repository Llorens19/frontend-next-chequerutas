'use client';
import { useCreateCommentMutation, useDeleteCommentMutation } from '@/reactQuery/mutations/comments.mutations';
import { useGetUserQuery } from '@/reactQuery/queries/user.query';
import { IComment } from '@/shared/interfaces/entities/comment.interface';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

const CommentCard = ({ comment }: { comment: IComment }) => {
  const [isReplying, setIsReplying] = useState(false);
  const [body, setBody] = useState('');
  const [showSubCommentes, setShowSubCommentes] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const commentCreate = useCreateCommentMutation();
  const deleteCommentMutation = useDeleteCommentMutation();
  const { data: userLogged } = useGetUserQuery();

  const deleteComment = () => {
    deleteCommentMutation.mutate(comment.idComment);
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
      <div className={`flex pt-2 gap-4 border-color2 ${comment.idParentComment ? 'w-11/12 ml-auto' : 'w-full'}`}>
        <div>
          <Image
            className="rounded-full h-auto"
            src={comment.user?.imgUser ?? '/images/profile/perfil.jpg'}
            alt={comment.body}
            width={50}
            height={50}
          />
        </div>
        <div className="w-full">
          <div className="flex gap-4 items-center">
            <a className="font-bold text-text4">{comment.user?.username}</a>
            <p className="text-xs text-text3">
              {new Date(comment.createdAt!).toLocaleDateString()}
            </p>
          </div>
          {comment.imgComment && (
            <div className="w-1/2 mx-auto">
              <Image
                className="rounded-3xl"
                src={comment.imgComment || '/images/profile/perfil.jpg'}
                alt={comment.body}
                width={100}
                height={100}
              />
            </div>
          )}
          <p className="text-sm text-text1">{comment.body}</p>

          <div className="flex gap-4 w-full justify-end">
            {userLogged && comment.idUser === userLogged.idUser && (
              <a className="text-xs text-[#8e2525] hover:text-[#ff3a3a] transition" onClick={deleteComment}>
                Borrar
              </a>
            )}
            {!comment.idParentComment && userLogged && (
              <a className="text-xs text-text4 hover:text-text1 transition" onClick={replyComment}>
                Responder
              </a>
            )}
          </div>

          {comment.comments && comment.comments.length > 0 && (
            <button
              className="mt-2 text-xs text-contrast2 hover:text-contrast2_hover transition"
              onClick={() => setShowSubCommentes(!showSubCommentes)}
            >
              {showSubCommentes ? 'Ocultar respuestas' : `Ver más (${comment.comments.length})`}
            </button>
          )}
        </div>
      </div>

      {isReplying && (
        <div className="ml-12 p-4 flex bg-color2 rounded-3xl  ">
          <input
            ref={inputRef}
            type="text"
            className="w-full p-2 border rounded-3xl bg-color1"
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

      {showSubCommentes && comment.comments && comment.comments.length > 0 && (
        <div className="ml-8 border-l-2 border-color4 pl-4 mt-2">
          {comment.comments.map((childComment: IComment) => (
            <CommentCard comment={childComment} key={childComment.idComment} />
          ))}
        </div>
      )}
    </>
  );
};

export default CommentCard;
