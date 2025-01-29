'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import CardRoute from '@/components/cards/CardRoute';
import { IRoute } from '@/interfaces/entities/route.interface';
import { useRoutesQuery } from '@/queries/routes.query';
import { IRouteFilters } from '@/interfaces/services/route/getRoutes.interface';

const ListRoute = () => {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<IRouteFilters>({ limit: 10, offset: 0 });

  useEffect(() => {
    const encodedFilters = searchParams.get('filters');


    if (encodedFilters) {
      try {
        const decoded = JSON.parse(atob(encodedFilters));
        setFilters({...decoded, limit: 10, offset: 0});
      } catch (error) {
        console.error('Error decoding filters:', error);
      }
    }
  }, [searchParams]);

  const { data: routes, refetch } = useRoutesQuery(filters);



  useEffect(() => {
    refetch();
  }, [filters, refetch]);


  return (
    <div className="flex-1 overflow-y-auto pr-4">
      {routes?.routes.map((route: IRoute) => (
        <CardRoute key={route.idRoute} route={route} />
      ))}
    </div>
  );
};

export default ListRoute;
