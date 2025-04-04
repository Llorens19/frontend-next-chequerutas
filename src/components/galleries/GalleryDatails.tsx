'use client';

import { IGalleryDetailsParams } from '@/shared/interfaces/components/galleries/GalleryDetails.interface';
import { IRoute } from '@/shared/interfaces/entities/route.interface';
import Image from 'next/image';
import { useState } from 'react';

const GalleryDetails = ({ route }: IGalleryDetailsParams) => {
  const { imagesRoutes } = route as IRoute;

  const [selectedImage, setSelectedImage] = useState<string>(
    imagesRoutes?.[0]?.imageUrl || '/images/routes/ruta_generica.png'
  );

  const onClickImage = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  return (
    <>
      <div className="flex flex-col rounded-3xl overflow-hidden w-full gap-2">
        <div className="w-full bg-color4 rounded-3xl">
          <Image
            className="rounded-3xl object-cover w-full h-full"
            src={selectedImage}
            alt="holaaa"
            width={800}
            height={800}
          />
        </div>
        <div className="flex  gap-2">
          {imagesRoutes?.slice(0, 4).map((image, index) => (
            <div
              key={index}
              className="bg-color4 w-1/4 rounded-3xl"
              onClick={() => onClickImage(image.imageUrl)}
            >
              <Image
                className="rounded-3xl object-cover w-full h-full"
                src={image.imageUrl}
                alt="holaaa"
                width={200}
                height={200}
              />
            </div>
          ))}

          {imagesRoutes?.length === 0 && (
            <div className="bg-color4 w-1/4 rounded-3xl">
              <Image
                className="rounded-3xl object-cover w-full h-full"
                src={'/images/routes/ruta_generica.png'}
                alt="holaaa"
                width={200}
                height={200}
              />
            </div>
          )}

          {!imagesRoutes?.[1] && (
          <div className="bg-color2 w-1/4 rounded-3xl"></div>
          )}

          {!imagesRoutes?.[1] && (
          <div className="bg-color2 w-1/4 rounded-3xl"></div>
          )}

          {!imagesRoutes?.[1] && (
          <div className="bg-color2 w-1/4 rounded-3xl"></div>
          )}

        </div>
      </div>
    </>
  );
};

export default GalleryDetails;
