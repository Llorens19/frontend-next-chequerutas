import CreateRoutePage from '@/components/pages/CreateRoutePage';
import IsLogged from '@/guards/Logged.guard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crear Ruta',
  description: 'Página de autenticación de la aplicación',
};

const CreateRoute = () => {
  return (
    <>
      <IsLogged>
        <CreateRoutePage />
      </IsLogged>
    </>
  );
};

export default CreateRoute;
