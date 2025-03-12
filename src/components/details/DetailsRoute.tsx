'use client';
import { useEffect } from 'react';
import CardDetailRoute from '@/components/cards/CardDetailRoute';
import CommentsRoute from '@/components/comments/CommentsRoute';
import { useRouteQuery } from '@/reactQuery/queries/routes.query';
import { IDetailsRouteParams } from '@/shared/interfaces/components/details/DetailsRoute.interface';
import { useRouter } from 'next/navigation';
import SpinnerLoading from '@/components/spinners/SpinnerLoading';
import { motion } from 'framer-motion';
import useMobile from '@/hooks/useMobile.hook';
import CardDetailRouteMobile from '@/compontesPhone/cards/CardDetailsRouteMobile';

const DetailsRoute = ({ idRoute }: IDetailsRouteParams) => {
  const router = useRouter();

  const isMobile = useMobile();

  const { data: route, isLoading: isLoadingRoute } = useRouteQuery(idRoute);

  useEffect(() => {
    if (!route && !isLoadingRoute) {
      router.push('/');
    }
  }, [route, isLoadingRoute, router]);

  if (isLoadingRoute) {
    return <SpinnerLoading />;
  }

  return (
    <>
      {route ? (
        <>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {isMobile ? (
              <CardDetailRouteMobile route={route} />
            ) : (
              <CardDetailRoute route={route} />
            )}
            <CommentsRoute idRoute={idRoute} />


          </motion.div>
        </>
      ) : (
        <p>Route not found</p>
      )}
    </>
  );
};

export default DetailsRoute;
