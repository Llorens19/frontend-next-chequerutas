'use client';

import CreateRoute from '@/components/createRoute/CreateRoute';
import CreateRouteMobile from '@/compontesPhone/createRoute/CreateRouteMobile';
import useMobile from '@/hooks/useMobile.hook';

const CreateRoutePage: React.FC = () => {
  const isMobile = useMobile();

  return <>{isMobile ? <CreateRouteMobile /> : <CreateRoute />}</>;
};

export default CreateRoutePage;
