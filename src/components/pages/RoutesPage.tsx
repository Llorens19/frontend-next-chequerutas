'use client';

import FilterRoute from '@/components/filters/FilterRoute';
import ListRoute from '@/components/lists/ListRoute';
import MapListRoutes from '@/components/maps/MapListRoute';
import RoutePageMobile from '@/compontesPhone/pages/RoutePageMobile';
import useMobile from '@/hooks/useMobile.hook';

const RoutesPage = () => {
  const isMobile = useMobile();
  return (
    <>
      {isMobile ? (
        <RoutePageMobile />
      ) : (
        <>
          <FilterRoute />
          <div className="flex flex-row h-full mx-auto gap-8">
            <div className="w-3/5 mt-48 ml-16">
              <ListRoute />
            </div>

            <div className="w-2/5 h-screen sticky top-0">
              <MapListRoutes />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default RoutesPage;
