'use client';
import { useEffect } from 'react';
import CardDetailRoute from '@/components/cards/CardDetailRoute';
import CommentsRoute from '@/components/comments/CommentsRoute';
import { useRouteQuery } from '@/reactQuery/queries/routes.query';
import { IDetailsRouteParams } from '@/shared/interfaces/components/details/DetailsRoute.interface';
import { useRouter } from 'next/navigation';
import SpinnerLoading from '@/components/spinners/SpinnerLoading';

const DetailsRoute = ({ idRoute }: IDetailsRouteParams) => {
  const router = useRouter();

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
          <CardDetailRoute route={route} />
          <CommentsRoute idRoute={idRoute} />
        </>
      ) : (
        <p>Route not found</p>
      )}
    </>
  );
};

export default DetailsRoute;