'use client';

import CardRoute from '@/components/cards/CardRoute';
import { IListRouteProfileProps } from '@/shared/interfaces/components/lists/ListRouteProfile.interface';

const ListRouteProfile = ({routes}: IListRouteProfileProps) => {

  return (
    <div className="flex-1 overflow-y-auto">
        {routes.map((route) => (
          <CardRoute key={route.idRoute} route={route} />
        ))}

      {routes.length === 0 && (
        <div className="text-center text-text1 py-4  text-xl">No tienes rutas guardadas</div>
      )}
    </div>
  );
};

export default ListRouteProfile;
