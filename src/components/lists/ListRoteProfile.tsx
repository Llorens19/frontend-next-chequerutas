'use client';

import CardRoute from '@/components/cards/CardRoute';
import { IListRouteProfileProps } from '@/shared/interfaces/components/lists/ListRouteProfile.interface';

const ListRouteProfile = ({routes}: IListRouteProfileProps) => {

  return (
    <div className="flex-1 overflow-y-auto">
        {routes.map((route) => (
          <CardRoute key={route.idRoute} route={route} />
        ))}
    </div>
  );
};

export default ListRouteProfile;
