import FilterRoute from '@/components/filters/FilterRoute';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inicio',
  description: 'Página de inicio de la aplicación',
};

const Routes = async () => {
  return (
    <>
      <FilterRoute />
    </>
  );
};

export default Routes;
