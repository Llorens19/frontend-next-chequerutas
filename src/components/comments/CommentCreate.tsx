'use client';

import DropzoneComment from '@/components/dropzones/DropzoneComment';
import { useCreateCommentMutation } from '@/reactQuery/mutations/comments.mutations';
import { CommentCommandService } from '@/services/commands/comment.commandService';
import { useState } from 'react';

const CommentCreate = ({ idRoute }: { idRoute: string }) => {

  const [body, setBody] = useState<string>('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const commentCreate = useCreateCommentMutation();

  const createComment = async () => {
    let imgUrl = '';
    if (uploadedFile) {
      try {
      const { url } = await CommentCommandService.saveCommentImage(uploadedFile);
      imgUrl = url;
      } catch (error) {
      }
    }


      console.log('Imagen subida, URL:', imgUrl);
    commentCreate.mutate({ idRoute, body, imgComment: imgUrl });
    setBody('');
    setUploadedFile({} as File);
  };

  const cancelComment = () => {
    setBody('');
    setUploadedFile({} as File);
  };

  const handleFilesChange = (file: File| null):void => {
    setUploadedFile(file);
  };

  return (
    <div className="p-4 flex flex-col bg-color2 rounded-3xl">
      <h3 className="text-lg text-text1">Comparte tu experiencia</h3>
      <div className="w-full mt-4">
        <textarea
          className="w-full p-2 border rounded-3xl bg-color1 text-text1"
          placeholder="Comparte tu experiencia"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <div className="w-full text-text4 flex gap-4 justify-end hover:text-text1 transition">
        <button
          className="bg-color1 text-text4 px-4 py-2 rounded-3xl mt-2"
          onClick={createComment}
        >
          <p>Crear</p>
        </button>
        <button
          className="bg-color1 text-text4 px-4 py-2 rounded-3xl mt-2"
          onClick={cancelComment}
        >
          <p>Cancelar</p>
        </button>
        <DropzoneComment  onFileUpload={handleFilesChange} />
      </div>
    </div>
  );
};
export default CommentCreate;