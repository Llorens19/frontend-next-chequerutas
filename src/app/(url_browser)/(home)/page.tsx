import CarouselCategory from '@/components/carousels/CarouselCategory';
import SearchHome from '@/components/searches/SearchHome';

const Home = () => {

  const styles = {
    backgroundImage: 'linear-gradient(to bottom, rgba(20, 22, 27, 0.3), rgba(20, 22, 27, 1)), url(\'/images/home_header.jpg\')',
    height: '30vh',
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
  };

  return (
    <>
      <section
        className="flex flex-col items-center justify-center bg-cover bg-center mt-16 z-10 "
        style={styles}
      >
        <h1 className="text-white text-4xl font-bold">Bienvenido</h1>
        <p className="text-white mt-4">Este es un fondo en blanco y negro</p>
        <SearchHome/>
      </section>
      <section className='z-0'>
        <CarouselCategory/>
      </section>
    </>
  );
};

export default Home;