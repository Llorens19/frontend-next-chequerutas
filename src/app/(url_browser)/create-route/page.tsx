
import CreateRouteForm from '@/components/CreateRoute/CreateRouteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crear Ruta',
  description: 'Página de autenticación de la aplicación',
};

const CreateRoute = () => {
  return (
    <>
      <CreateRouteForm />
    </>
  );
};

export default CreateRoute;
