'use client';

import { useCreateCommentMutation } from '@/reactQuery/mutations/comments.mutations';
import { useState } from 'react';

const CommentCreate = ({ idRoute }: { idRoute: string }) => {

  const [body, setBody] = useState<string>('');

  const commentCreate = useCreateCommentMutation( );



  const createComment = () => {
    commentCreate.mutate({ idRoute, body });

  };

  const cancelComment = () => {
    setBody('');
  };



  return (
    <div className="p-4 flex flex-col  bg-color2 rounded-lg  ">
      <h3 className="text-lg text-text1">Escribe un comentario</h3>
      <div className=" w-full mt-4">
          <textarea
            className="w-full p-2 border rounded-lg bg-color1 text-text1"
            placeholder="Escribe un comentario"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
      </div>
      <div className="w-full text-text4 flex gap-4 justify-end hover:text-text1 transition">

        <button className="bg-color1 text-text4 px-4 py-2 rounded-lg mt-2"
        onClick={createComment}>
          <p>Crear</p>
        </button>

        <button className="bg-color1 text-text4 px-4 py-2 rounded-lg mt-2"
        onClick={cancelComment}>
          <p>Cancelar</p>
        </button>

      </div>
    </div>
  );
};
export default CommentCreate;
