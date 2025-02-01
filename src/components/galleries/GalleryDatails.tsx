'use client';

import { IGalleryDetailsParams } from '@/shared/interfaces/components/galleries/GalleryDetails.interface';
import { IRoute } from '@/shared/interfaces/entities/route.interface';
import Image from 'next/image';
import { useState } from 'react';

const GalleryDetails = ({ route }: IGalleryDetailsParams) => {

  const { imagesRoutes } = route as IRoute;

  const [selectedImage, setSelectedImage] = useState<string>(imagesRoutes?.[0]?.imageUrl || '/images/routes/ruta_generica.png');

  const onClickImage = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  return (
    <>
      <div className=" flex shadow-lg rounded-lg overflow-hidden w-full">
        <div className="w-5/6 bg-color4 rounded-lg">
          <Image
            className="rounded-lg object-cover w-full h-full"
            src={selectedImage}
            alt="holaaa"
            width={2000}
            height={2000}
          />
        </div>
        <div className="w-1/6 ml-8 flex flex-col justify-between gap-4">

            {imagesRoutes?.slice(0, 4).map((image, index) => (
            <div
              key={index}
              className="bg-color4 w-full rounded-lg"
              onClick={() => onClickImage(image.imageUrl)}
            >
              <Image
              className="rounded-lg object-cover w-full h-full"
              src={image.imageUrl}
              alt="holaaa"
              width={200}
              height={200}
              />
            </div>
            ))}


            { imagesRoutes?.length === 0 && (
              <div
              className="bg-color4 w-full rounded-lg"
            >
              <Image
              className="rounded-lg object-cover w-full h-full"
              src={'/images/routes/ruta_generica.png'}
              alt="holaaa"
              width={200}
              height={200}
              />
            </div>)
            }

        </div>
      </div>
    </>
  );
};

export default GalleryDetails;
