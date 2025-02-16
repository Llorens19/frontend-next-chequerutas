import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface FileDropzoneProps {
  onFileUpload: (file: File) => void;
}

const FileDropzone: React.FC<FileDropzoneProps> = ({ onFileUpload }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onFileUpload(acceptedFiles[0]);
    }
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {'image/*': []}, // Solo acepta imágenes
    multiple: false, // Solo un archivo
  });

  return (
    <div
      {...getRootProps()}
      style={{ border: '2px dashed gray', padding: '20px', textAlign: 'center', cursor: 'pointer' }}
    >
      <input {...getInputProps()} />
      {isDragActive ? <p>Suelta la imagen aquí...</p> : <p>Arrastra y suelta una imagen o haz clic para subirla</p>}
    </div>
  );
};

export default FileDropzone;