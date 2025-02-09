'use client';
import CardDetailRoute from '@/components/cards/CardDetailRoute';
import { useRouteQuery } from '@/reactQuery/queries/routes.query';
import { IDetailsRouteParams } from '@/shared/interfaces/components/details/DetailsRoute.interface';

const DetailsRoute = ({idRoute}:IDetailsRouteParams) => {

  const {data: route} = useRouteQuery(idRoute);



  return (
    <>
    {route ? <CardDetailRoute route={route} /> : <p>Route not found</p>}
    </>
  );
};

export default DetailsRoute;