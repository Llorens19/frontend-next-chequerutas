import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Paperclip } from 'lucide-react';

interface DropzoneCommentProps {
  maxImages?: number;
  onFilesChange?: (files: { name: string; extension: string }[]) => void;
}

const generateRandomName = (originalName: string) => {
  const extension = originalName.split('.').pop();
  const randomString = Math.random().toString(36).substring(2, 12);
  return { name: `${randomString}.${extension}`, extension };
};

const DropzoneComment: React.FC<DropzoneCommentProps> = ({ maxImages = 5, onFilesChange }) => {
  const [images, setImages] = useState<{ file: File; url: string; newName: string }[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const availableSlots = maxImages - images.length;

      if (availableSlots <= 0) {
        alert(`Solo puedes subir hasta ${maxImages} imágenes.`);
        return;
      }

      const uploadedImages = acceptedFiles.slice(0, availableSlots).map((file) => {
        const { name } = generateRandomName(file.name);
        return {
          file: new File([file], name, { type: file.type }),
          url: URL.createObjectURL(file),
          newName: name,
        };
      });

      setImages((prevImages) => {
        const updatedImages = [...prevImages, ...uploadedImages];
        if (onFilesChange) {
          onFilesChange(updatedImages.map(({ newName }) => ({ name: newName, extension: newName.split('.').pop() || '' })));
        }
        return updatedImages;
      });
    },
    [images, maxImages, onFilesChange]
  );

  const removeImage = (index: number) => {
    setImages((prevImages) => {
      const updatedImages = prevImages.filter((_, i) => i !== index);
      if (onFilesChange) {
        onFilesChange(updatedImages.map(({ newName }) => ({ name: newName, extension: newName.split('.').pop() || '' })));
      }
      return updatedImages;
    });
  };

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    noClick: true,
    noKeyboard: true,
  });

  return (
    <div className="flex items-center p-4 border rounded-lg gap-4">
      <div className="flex space-x-2">
        {images.map((img, index) => (
          <div key={index} className="relative">
            <button
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
              onClick={() => removeImage(index)}
            >
              ✕
            </button>
            <Image
              src={img.url}
              alt="preview"
              width={80}
              height={80}
              className="w-12 h-12 rounded-lg shadow-md object-cover"
            />
          </div>
        ))}
      </div>

      <div {...getRootProps()} className="cursor-pointer">
        <input {...getInputProps()} />
        <button onClick={open} className="p-2 rounded-full hover:scale-110 transition">
          <Paperclip className="w-6 h-6 text-text1" />
        </button>
      </div>
    </div>
  );
};

export default DropzoneComment;
