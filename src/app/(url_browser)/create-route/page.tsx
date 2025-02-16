import CreateRouteForm from '@/components/createRoute/CreateRouteForm';
import IsLogged from '@/guards/logged';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crear Ruta',
  description: 'Página de autenticación de la aplicación',
};

const CreateRoute = () => {
  return (
    <>
      <IsLogged>
        <CreateRouteForm />
      </IsLogged>
    </>
  );
};

export default CreateRoute;
