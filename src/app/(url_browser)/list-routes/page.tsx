import FilterRoute from '@/components/filters/FilterRoute';
import ListRoute from '@/components/lists/ListRoute';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inicio',
  description: 'Página de inicio de la aplicación',
};

const Routes = async () => {


  return (
    <>
      <FilterRoute />
      <div className="flex flex-row h-full w-11/12 mx-auto mt-48 gap-8">
        <div className="w-3/5">
          <ListRoute />
        </div>
        <div className="w-2/5 h-[80vh] sticky top-48 ">
          <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">
            Mapa
          </div>
        </div>
      </div>
    </>
  );
};

export default Routes;
