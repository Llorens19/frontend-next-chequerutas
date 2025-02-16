'use client';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Paperclip, X } from 'lucide-react';
import Image from 'next/image';

const DropzoneComment = ({ onFileUpload }: { onFileUpload: (file: File | null) => void }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        setSelectedFile(file);
        onFileUpload(file);
      }
    },
    [onFileUpload]
  );

  const removeFile = () => {
    setSelectedFile(null);
    onFileUpload(null);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: false,
  });

  return (
    <div className="flex items-center gap-3">
      {selectedFile && (
        <div className="relative">
          <Image
            src={URL.createObjectURL(selectedFile)}
            alt="Uploaded preview"
            className="w-12 h-12 rounded-md object-cover"
            width={48}
            height={48}
          />
          <button
            className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs"
            onClick={removeFile}
          >
            <X size={12} />
          </button>
        </div>
      )}
      <div
        {...getRootProps()}
        className="cursor-pointer p-2 rounded-lg transition"
      >
        <input {...getInputProps()} />
        <Paperclip size={24} className="text-text1 hover:scale-125 transition" />
      </div>
    </div>
  );
};

export default DropzoneComment;
