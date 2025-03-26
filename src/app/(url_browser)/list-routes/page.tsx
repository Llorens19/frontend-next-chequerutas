import RoutesPage from '@/components/pages/RoutesPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inicio',
  description: 'Página de inicio de la aplicación',
};

const Routes = async () => {
  return (
    <RoutesPage />
  );
};

export default Routes;
