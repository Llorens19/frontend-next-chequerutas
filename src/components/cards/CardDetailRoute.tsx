'use client';
import GalleryDetails from '@/components/galleries/GalleryDatails';
import { ICardDetailRouteParams } from '@/shared/interfaces/components/cards/CardDetailsRoute.interface';

const CardDetailRoute = ({ route }: ICardDetailRouteParams) => {


  return (
    <>
    <div className=" flex flex-col w-2/3 m-auto mt-24">
      <GalleryDetails route={route} />



    </div>
    </>
  );
};

export default CardDetailRoute;
