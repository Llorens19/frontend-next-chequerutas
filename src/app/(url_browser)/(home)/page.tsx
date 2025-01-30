import getCategories from '@/actions/getCategories';
import CarouselCategory from '@/components/carousels/CarouselCategory';
import SearchHome from '@/components/searches/SearchHome';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inicio',
  description: 'Página de inicio de la aplicación',
};

const Home = async () => {
  const styles = {
    backgroundImage:
      'linear-gradient(to bottom, rgba(20, 22, 27, 0.3), rgba(20, 22, 27, 1)), url(\'/images/home_header.jpg\')',
    height: '30vh',
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
  };
  const categories = await getCategories();



  return (
    <>
      <section
        className="flex flex-col items-center justify-center bg-cover bg-center mt-16 z-10"
        style={styles}
      >
        <h1 className="text-white text-4xl font-bold">ViaSana</h1>
        <p className="text-white mt-4">Este es un fondo en blanco y negro</p>
        <SearchHome />
      </section>
      <section className="sport-carousel p-4">
        <h2 className="flex justify-center text-2xl font-bold text-white mb-4">
          Categorias
        </h2>
        <CarouselCategory categories={categories} />
      </section>
    </>
  );
};

export default Home;
