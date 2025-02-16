'use client';

import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { MapPin, X } from 'lucide-react';
import xml2js from 'xml2js';

const DropzoneGPX = ({ onGPXUpload }: { onGPXUpload: (coordinates: number[][]) => void }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const parseGPX = (file: File) => {
    const reader = new FileReader();
    reader.onload = async (event) => {
      if (!event.target?.result) return;
      const text = event.target.result as string;

      xml2js.parseString(text, (err, result) => {
        if (err) {
          console.error('Error parsing GPX:', err);
          return;
        }

        try {
          const trackPoints = result?.gpx?.trk?.[0]?.trkseg?.[0]?.trkpt || [];
          const coordinates = trackPoints.map((point: any) => [
            parseFloat(point.$.lat),
            parseFloat(point.$.lon),
            point.ele ? parseFloat(point.ele[0]) : 0,
          ]);

          onGPXUpload(coordinates);
        } catch (error) {
          console.error('Error extracting coordinates:', error);
        }
      });
    };
    reader.readAsText(file);
  };

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        setSelectedFile(file);
        parseGPX(file);
      }
    },
    [onGPXUpload]
  );

  const removeFile = () => {
    setSelectedFile(null);
    onGPXUpload([]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'application/gpx+xml': ['.gpx'] },
    multiple: false,
  });

  return (
    <div className="flex items-center gap-3">
        <div {...getRootProps()} className="cursor-pointer p-2 rounded-lg transition">
        <input {...getInputProps()} />
        <MapPin size={24} className="text-text1 hover:scale-125 transition" />
      </div>
      {selectedFile && (
        <div className="relative flex items-center gap-2 rounded-md text-text1">
          <span className="text-sm">Puntos</span>
          <button
            className="bg-red-500 text-white rounded-full text-xs"
            onClick={removeFile}
          >
            <X size={12} />
          </button>
        </div>
      )}

    </div>
  );
};

export default DropzoneGPX;
