'use client';

import DropzoneComment from '@/components/dropzones/DropzoneComment';
import { useCreateCommentMutation } from '@/reactQuery/mutations/comments.mutations';
import { CommentCommandService } from '@/services/commands/comment.commandService';
import { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';

const CommentCreateMobile = ({ idRoute }: { idRoute: string }) => {
  const [body, setBody] = useState<string>('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const commentCreate = useCreateCommentMutation();

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '24px'; // Una sola línea de altura inicial
      const maxHeight = 8 * 24; // Suponiendo que cada línea es de 24px
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        maxHeight
      )}px`;
      textareaRef.current.style.overflowY =
        textareaRef.current.scrollHeight > maxHeight ? 'auto' : 'hidden';
    }
  }, [body]);

  const createComment = async () => {
    let imgUrl = '';
    if (uploadedFile) {
      try {
        const { url } = await CommentCommandService.saveCommentImage(
          uploadedFile
        );
        imgUrl = url;
      } catch (error) {
        console.error('Error al subir la imagen:', error);
      }
    }

    console.log('Imagen subida, URL:', imgUrl);
    commentCreate.mutate({ idRoute, body, imgComment: imgUrl });
    setBody('');
    setUploadedFile(null);
  };

  const handleFilesChange = (file: File | null): void => {
    setUploadedFile(file);
  };

  return (
    <div className="p-2 flex flex-col fixed bottom-0 left-0 right-0 z-50 bg-color2">
      <div className="w-full mt-4">
        <div className="flex gap-2">
          <div>
            <DropzoneComment onFileUpload={handleFilesChange} />
          </div>

          <textarea
            ref={textareaRef}
            className="w-full p-2 border rounded-xl bg-color1 text-text1 resize-none h-auto"
            placeholder="Comparte tu experiencia"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            style={{ height: '24px' }}
          />

          <div
            className="cursor-pointer p-2 rounded-lg transition"
            onClick={createComment}
          >
            <Send
              size={24}
              className="text-text1 hover:scale-125 transition items-centers"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CommentCreateMobile;
