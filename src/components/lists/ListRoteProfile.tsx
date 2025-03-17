'use client';

import CardRoute from '@/components/cards/CardRoute';
import CardRouteMobile from '@/compontesPhone/cards/CardRouteMobile';
import useMobile from '@/hooks/useMobile.hook';
import { IListRouteProfileProps } from '@/shared/interfaces/components/lists/ListRouteProfile.interface';

const ListRouteProfile = ({ routes }: IListRouteProfileProps) => {
  const isMobile = useMobile();

  return (
    <div className="flex-1 overflow-y-auto">
      {routes.map((route) =>
        isMobile ? (
          <CardRouteMobile key={route.idRoute} route={route} />
        ) : (
          <CardRoute key={route.idRoute} route={route} />
        )
      )}

      {routes.length === 0 && (
        <div className="text-center text-text1 py-4  text-xl">
          No hay rutas
        </div>
      )}

    </div>
  );
};

export default ListRouteProfile;
