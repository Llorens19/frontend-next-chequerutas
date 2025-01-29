'use client';
import CardRoute from '@/components/cards/CardRoute';
import CardRouteMobile from '@/components/cards/CardRouteMobile';
import { IListRouteInput } from '@/interfaces/components/lists/ListRoute.interface';
import { IRoute } from '@/interfaces/entities/route.interface';
import { useRoutesQuery } from '@/queries/routes.query';

const ListRoute = ({ filters }: IListRouteInput ) => {
  const { data: routes } = useRoutesQuery(filters);

  return (
    <div className="flex-1 overflow-y-auto pr-4 ">
      {routes?.routes.map((route: IRoute) => (
        // <CardRouteMobile key={route.idRoute} route={route} />
        <CardRoute key={route.idRoute} route={route} />
      ))}
    </div>
  );
};

export default ListRoute;
