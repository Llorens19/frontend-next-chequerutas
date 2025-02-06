'use client';
import CardDetailRoute from '@/components/cards/CardDetailRoute';
import { IDetailsRouteParams } from '@/shared/interfaces/components/details/DetailsRoute.interface';

const DetailsRoute = ({route}:IDetailsRouteParams) => {


  console.log('Route:');



  return (
    <>
    {route ? <CardDetailRoute route={route} /> : <p>Route not found</p>}
    </>
  );
};

export default DetailsRoute;