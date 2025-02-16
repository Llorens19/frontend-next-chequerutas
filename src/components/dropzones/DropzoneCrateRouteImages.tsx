'use client';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { X } from 'lucide-react';
import Image from 'next/image';

const DropzoneCreateRouteImages = ({ onFilesUpload }: { onFilesUpload: (files: File[]) => void }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        const newFiles = [...selectedFiles, ...acceptedFiles].slice(0, 4);
        setSelectedFiles(newFiles);
        onFilesUpload(newFiles);
      }
    },
    [selectedFiles, onFilesUpload]
  );

  const removeFile = (index: number) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(newFiles);
    onFilesUpload(newFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: true,
    maxFiles: 4,
  });

  return (
    <div className="flex items-center gap-3 flex-wrap w-full">
      {selectedFiles.map((file, index) => (
        <div key={index} className="relative">
          <Image
            src={URL.createObjectURL(file)}
            alt={`Uploaded preview ${index}`}
            className="w-12 h-12 rounded-md object-cover"
            width={48}
            height={48}
          />
          <button
            className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs"
            onClick={() => removeFile(index)}
          >
            <X size={12} />
          </button>
        </div>
      ))}
      {selectedFiles.length < 4 && (
        <div
          {...getRootProps()}
          className="cursor-pointer p-2 rounded-3xl transition border-2 border-dashed border-text1 flex items-center justify-center w-full h-24"
        >
          <input {...getInputProps()} />
          <p className='text-text3'>Arrastra las imágenes aquí</p>
        </div>
      )}
    </div>
  );
};

export default DropzoneCreateRouteImages;
