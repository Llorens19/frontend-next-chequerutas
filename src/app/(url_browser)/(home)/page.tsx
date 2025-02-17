
import CarouselCategory from '@/components/carousels/CarouselCategory';
import SearchHome from '@/components/searches/SearchHome';
import { CategoryQueryService } from '@/services/queries/category.queryService';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inicio',
  description: 'Página de inicio de la aplicación',
};

const Home = async () => {
  const { categories } = await CategoryQueryService.getCategories();

  console.log(categories);

  return (
    <>
      <section className="relative w-full h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url(\'/images/home_header.jpg\')' }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black/50">
          <h1 className="text-text1 text-4xl font-bold">CheQueRutas</h1>
          <p className="text-text1 mt-4">Este es un fondo en blanco y negro</p>
          <SearchHome />
          <div className="w-full">
            <h2 className="flex justify-center text-2xl font-bold text-text1 mb-4">
              Categorías
            </h2>
            <CarouselCategory categories={categories}  />
          </div>
        </div>
      </section>

      <section className="sport-carousel p-4 min-h-screen bg-background1 relative z-20">
        <h2 className="flex justify-center text-2xl font-bold text-text1 mb-4">
          Categorías
        </h2>
      </section>
    </>
  );
};

export default Home;
