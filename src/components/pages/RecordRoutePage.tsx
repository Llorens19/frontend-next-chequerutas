'use client';

import RecordRouteMobile from '@/compontesPhone/record/RecordRouteMobile';
import useMobile from '@/hooks/useMobile.hook';

const RecordRoutePage = () => {
  const isMobile = useMobile();

  return (
  <>
  {
    isMobile ?
    <RecordRouteMobile/>
    :
    <p>Adiós</p>
    }
    </>
  );
};

export default RecordRoutePage;
