'use client';

import CarouselCategory from '@/components/carousels/CarouselCategory';
import SearchHome from '@/components/searches/SearchHome';
import CardRouteMobile from '@/compontesPhone/cards/CardRouteMobile';
import CarouselCategoryMobile from '@/compontesPhone/carousels/CarouselCategoryMobile';
import useMobile from '@/hooks/useMobile.hook';
import { useRoutesQuery } from '@/reactQuery/queries/routes.query';
import { ICategories } from '@/shared/interfaces/entities/category.interface';

const HomePage = ({ categories }: ICategories) => {
  const isMobile = useMobile();
  const { data: routes } = useRoutesQuery({});

  const routesFiltered = routes?.routes
    .sort((a, b) => {
      return (
        new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
      );
    })
    .slice(0, 5);

  console.log(routesFiltered);

  return (
    <>
      {isMobile ? (
        <section className="relative w-full h-screen pt-12">
          <div className="relative z-10 flex flex-col items-center justify-center min-h-full">
            <h1 className="text-text1 marker:text-5xl font-black text-5xl">
              CheQueRutas
            </h1>
            <p className="text-text1 text-xl my-4">
              ¿Perdido? Busca tu camino.
            </p>
            <SearchHome />

            <div className="w-full">
              <h2 className="flex justify-center text-2xl font-bold text-text1 mb-4 mt-8">
                Categorías
              </h2>
              <CarouselCategoryMobile categories={categories} />
            </div>

            <h2 className="flex justify-center text-2xl font-bold text-text1 mb-4 mt-8">
              Creadas Recientemente
            </h2>

            <div className="flex flex-col w-flex px-2 gap-4 pb-20">
              {routesFiltered?.map((route) => (
                <CardRouteMobile key={route.idRoute} route={route} />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="relative w-full h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: 'url(\'/images/home_header.jpg\')' }}
          />

          <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black/50">
            <h1 className="text-white text-7xl font-black">CheQueRutas</h1>
            <p className="text-white text-2xl my-4">
              ¿Perdido? Busca tu camino.
            </p>
            <SearchHome />

            <div className="w-full">
              <h2 className="flex justify-center text-2xl font-bold text-white mb-4 mt-8">
                Categorías
              </h2>
              <CarouselCategory categories={categories} />
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default HomePage;
