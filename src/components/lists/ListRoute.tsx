'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import CardRoute from '@/components/cards/CardRoute';
import { IRoute } from '@/interfaces/entities/route.interface';
import { useRoutesQuery } from '@/queries/routes.query';
import { IRouteFilters } from '@/interfaces/services/route/getRoutes.interface';
import InfiniteScroll from 'react-infinite-scroll-component';

const ListRoute = () => {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<IRouteFilters>({ limit: 4, offset: 0 });
  const [routesList, setRoutesList] = useState<IRoute[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  const { data: routes, refetch } = useRoutesQuery(filters);



  useEffect(() => {
    const encodedFilters = searchParams.get('filters');

    if (encodedFilters) {
      try {
        const decoded = JSON.parse(atob(encodedFilters));
        setFilters({ ...decoded, limit: 4, offset: 0 });
        setRoutesList([]);
      } catch (error) {
        console.error('Error decoding filters:', error);
      }
    }
  }, [searchParams]);





  useEffect(() => {
    refetch();
  }, [filters, refetch]);




  useEffect(() => {
    if (routes?.routes) {
      setRoutesList((prevRoutes) => [...prevRoutes, ...routes.routes]);
      setIsFetching(false);
    }
  }, [routes]);



  const loadMoreRoutes = () => {
    setIsFetching(true);
    setFilters((prevFilters) => ({
      ...prevFilters,
      offset: (prevFilters.offset ?? 0) + (prevFilters.limit ?? 4),
    }));
  };




  return (
    <div className="flex-1 overflow-y-auto pr-4">
      <InfiniteScroll
        dataLength={routesList.length}
        next={loadMoreRoutes}
        hasMore={!isFetching && (routes?.routes?.length ?? 0) > 0}
        loader={<div className="text-center text-white py-4">Cargando... </div>}
        endMessage={<div className="text-center text-white py-4">No hay más rutas</div>}
      >
        {routesList.map((route) => (
          <CardRoute key={route.idRoute} route={route} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default ListRoute;
