'use client';

import DropzoneComment from '@/components/dropzones/DropzoneComment';
import { useCreateCommentMutation } from '@/reactQuery/mutations/comments.mutations';
import { CommentCommandService } from '@/services/commands/comment.commandService';
import { useState } from 'react';

const CommentCreate = ({ idRoute }: { idRoute: string }) => {

  const [body, setBody] = useState<string>('');
  const [uploadedFiles, setUploadedFiles] = useState<File>({ } as File);

  const commentCreate = useCreateCommentMutation();

  const createComment = async () => {
    let imgUrl = '';
    console.log('files:', uploadedFiles);
      const { url } = await CommentCommandService.saveCommentImage(uploadedFiles);
      console.log('URL:', url);
      imgUrl = url;
      console.log('Imagen subida, URL:', imgUrl);
    commentCreate.mutate({ idRoute, body, imgComment: imgUrl });
    setBody('');
    setUploadedFiles({} as File);
  };

  const cancelComment = () => {
    setBody('');
    setUploadedFiles({} as File);
  };

  const handleFilesChange = (files: File):void => {
    setUploadedFiles(files);
    console.log('Archivos subidos:', files);
  };

  return (
    <div className="p-4 flex flex-col bg-color2 rounded-3xl">
      <h3 className="text-lg text-text1">Escribe un comentario</h3>
      <div className="w-full mt-4">
        <textarea
          className="w-full p-2 border rounded-3xl bg-color1 text-text1"
          placeholder="Escribe un comentario"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <DropzoneComment  onFileUpload={handleFilesChange} />
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
      </div>
    </div>
  );
};
export default CommentCreate;