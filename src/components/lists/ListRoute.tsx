'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import CardRoute from '@/components/cards/CardRoute';
import { IRoute } from '@/shared/interfaces/entities/route.interface';
import { useRoutesQuery } from '@/reactQuery/queries/routes.query';
import { IRouteFilters } from '@/shared/interfaces/services/queries/route/getRoutes.interface';
import InfiniteScroll from 'react-infinite-scroll-component';
import CardRouteSkeleton from '@/components/cards/skeletons/CardRouteSkeleton';
import { motion } from 'framer-motion';

const ListRoute = () => {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<IRouteFilters>({ limit: 4, offset: 0 });
  const [routesList, setRoutesList] = useState<IRoute[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  const { data: routes, isLoading, refetch } = useRoutesQuery(filters);



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
    setRoutesList((prevRoutes) => {
      const newRoutes = [...prevRoutes, ...routes.routes];
      const uniqueRoutes = Array.from(new Map(newRoutes.map(route => [route.idRoute, route])).values());
      return uniqueRoutes;
    });
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
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration:0.6, ease: 'easeOut' }}
  >
    <div className="flex-1 overflow-y-auto pr-4">
      <InfiniteScroll
        dataLength={routesList.length}
        next={loadMoreRoutes}
        hasMore={!isFetching && (routes?.routes?.length ?? 0) > 0}
        loader={<CardRouteSkeleton />}
        // endMessage={<div className="text-center text-text1 py-4">No hay más rutas</div>}
      >
        {!isLoading&& routesList.map((route) => (
          <CardRoute key={route.idRoute} route={route} />
        ))}
          {isLoading && <CardRouteSkeleton />}
          {!isLoading && routesList.length === 0 && (
            <div className="text-center text-text1 py-4  text-xl">No hay rutas que cumplan estas características</div>
          )}
      </InfiniteScroll>
    </div>
    </motion.div>
  );
};

export default ListRoute;
