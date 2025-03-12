'use client';
import GalleryDetails from '@/components/galleries/GalleryDatails';
import { ICardDetailRouteParams } from '@/shared/interfaces/components/cards/CardDetailsRoute.interface';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import GraphicAltitude from '@/components/graphics/GraphicAltitude';
import MapDetailsRoute from '@/components/maps/MapDetailsRoute';
import UpArrow from '@/components/SVGs/UpArrow';
import DownArrow from '@/components/SVGs/DownArrow';
import { useGetUserQuery } from '@/reactQuery/queries/user.query';
import useFavorite from '@/hooks/useFavorite.hook';
import CategoryIcons from '@/components/SVGs/CategoryIcons';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import SpinnerLoading from '@/components/spinners/SpinnerLoading';
import GpxForm from '@/components/gpxForm/GpxForm';

const CardDetailRouteMobile = ({ route }: ICardDetailRouteParams) => {
  const router = useRouter();
  const { data: userLogged, isLoading } = useGetUserQuery();
  const {
    isFavorite,
    onFavorite,
    onUnfavorite,
    isLoading: isLoadingFavorite,
  } = useFavorite(route.idRoute);

  if (isLoadingFavorite) return <SpinnerLoading />;
  if (isLoading) return <SpinnerLoading />;

  const onClickCategory = () => {
    const filters = { category: route.category?.idCategory };
    const encodedFilters = btoa(JSON.stringify(filters));

    router.push(`/list-routes?filters=${encodedFilters}`);
  };

  const onClickLocation = () => {
    const filters = { location: route.location?.idLocation };
    const encodedFilters = btoa(JSON.stringify(filters));

    router.push(`/list-routes?filters=${encodedFilters}`);
  };

  return (
    <>
      <div className="flex flex-col p-4 m-auto rounded-3xl gap-4">
        <div className="flex w-full text-lg whitespace-pre font-bold items-center ">
          <p
            className="text-text1 text-lg whitespace-pre hover:underline cursor-pointer"
            onClick={() => router.push('/list-routes')}
          >
            Rutas
          </p>
          <p className="text-text1 text-lg whitespace-pre"> / </p>
          <p className="text-text1 text-lg whitespace-pre">{route.title}</p>
        </div>

        <div className="flex flex-col gap-4 mt-8">
          <h1 className="text-4xl font-black text-text1 text-center">
            {route.title}
          </h1>
        </div>

        <div className="flex w-full text-sm whitespace-pre font-bold items-center justify-between">
          <div
            className="hover:scale-125 transition-transform cursor-pointer flex items-center"
            onClick={onClickCategory}
          >
            <CategoryIcons
              size={'34px'}
              category={route.category?.imgCategory
                ?.split('.')
                .slice(0, -1)
                .join('.')}
              color={'var(--text1)'}
            />
            <p className="text-text1 text-sm whitespace-pre cursor-pointer font-thin ml-2">
              {route.category?.nameCategory}
            </p>
          </div>

          <div
            className="flex items-center ml-8 text-text1 hover:underline "
            onClick={onClickLocation}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 0C15 0 7 8 7 18c0 12 18 30 18 30s18-18 18-30c0-10-8-18-18-18zm0 25a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"
                fill="var(--text1)"
                stroke="var(--text1)"
                strokeWidth="2"
              />
            </svg>

            <p className="text-text1 text-sm whitespace-pre cursor-pointer font-thin ml-2">
              {route.location?.nLocation}
            </p>
          </div>
        </div>

        <GalleryDetails route={route} />

        <div className="flex flex-wrap xl:flex-nowrap items-center gap-4 w-full bg-color2 rounded-3xl p-4">
          <div className="flex xl:w-1/2 m-auto h-full  justify-between">
            <div className="grid grid-cols-2 grid-rows-3 gap-6 w-full text-center">
              <div className="flex flex-col items-center">
                <div className="flex items-end">
                  <p className="text-3xl text-text2 font-black">
                    {route.duration}
                  </p>
                  <span className="text-lg text-text4 font-black ml-1">
                    min
                  </span>
                </div>
                <p className="text-lg font-bold text-text4">Duración</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-end">
                  <p className="text-3xl text-text2 font-black">
                    {route.distance?.toFixed(2).toString().replace('.', ',')}
                  </p>
                  <span className="text-lg text-text4 font-black ml-1">km</span>
                </div>
                <p className="text-lg font-bold text-text4">Distancia</p>
              </div>

              <div className="flex flex-col items-center">
                <p className="text-3xl text-text2 font-black">
                  {Number(route.level).toFixed(1)}
                </p>
                <p className="text-lg font-bold text-text4">Nivel</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-end">
                  <p className="text-3xl text-text2 font-black">
                    {Math.floor(route.positiveGradient) ?? 'N/A'}
                  </p>
                  <span className="text-lg text-text4 font-black ml-1">m</span>
                  <span className="text-green-500 ml-1">
                    <UpArrow />
                  </span>
                </div>
                <p className="text-lg font-bold text-text4">A. positiva</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-end">
                  <p className="text-3xl text-text2 font-black">
                    {Math.floor(route.negativeGradient) ?? 'N/A'}
                  </p>
                  <span className="text-lg text-text4 font-black ml-1">m</span>
                  <span className="text-red-500 ml-1">
                    <DownArrow />
                  </span>
                </div>
                <p className="text-lg font-bold text-text4">A. negativa</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-end">
                  <p className="text-3xl text-text2 font-black">
                    {Math.floor(route.cumulativeGradient) ?? 'N/A'}
                  </p>
                  <span className="text-lg text-text4 font-black ml-1">m</span>
                  <span className="text-green-500 ml-1">
                    <UpArrow />
                  </span>
                  <span className="text-red-500 ml-1">
                    <DownArrow />
                  </span>
                </div>
                <p className="text-lg font-bold text-text4">A. acumulada</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-96">
          <MapDetailsRoute coordinates={route.coordinates as L.LatLngTuple[]} />
        </div>
        <GraphicAltitude coordinates={route.coordinates!} />
        <p className="text-lg  text-text4 ">{route.description}</p>

        <div className="flex justify-between mb-8 bg-color2 rounded-3xl p-4 max-h-20">
          <div
            className="flex  bg-color4 rounded-full justify-center items-center hover:scale-105 transition-transform cursor-pointer"
            onClick={() => router.push(`/profile/${route.user?.username}`)}
          >
            <Image
              className="w-10 h-10 rounded-full border border-contrast2 object-cover"
              src={route.user?.imgUser || '/images/profile/perfil.jpg'}
              alt="test"
              width={32}
              height={32}
            />
            <p className="text-center text-text1  px-4">
              {route.user?.username}
            </p>
          </div>

          {userLogged && userLogged.premiumLevel > 0 && (
            <div>
              <GpxForm
                coordinates={route.coordinates}
                author={route.user!.username}
                time={route.createdAt!.toString()}
                title={route.title}
                description={route.description}
              />
            </div>
          )}

          {userLogged &&
            (isFavorite ? (
              <svg
                className="cursor-pointer hover:scale-105 transition-transform"
                onClick={onUnfavorite}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="40px"
                height="40px"
                fill="var(--text1)"
              >
                <path d="M 37 48 C 36.824219 48 36.652344 47.953125 36.496094 47.863281 L 25 41.15625 L 13.503906 47.863281 C 13.195313 48.042969 12.8125 48.046875 12.503906 47.867188 C 12.191406 47.6875 12 47.359375 12 47 L 12 3 C 12 2.449219 12.449219 2 13 2 L 37 2 C 37.554688 2 38 2.449219 38 3 L 38 47 C 38 47.359375 37.808594 47.6875 37.496094 47.867188 C 37.34375 47.957031 37.171875 48 37 48 Z" />
              </svg>
            ) : (
              <svg
                className="cursor-pointer hover:scale-105 transition-transform"
                onClick={onFavorite}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="40px"
                height="40px"
                fill="var(--text1)"
              >
                <path d="M 12.8125 2 C 12.335938 2.089844 11.992188 2.511719 12 3 L 12 47 C 11.996094 47.359375 12.1875 47.691406 12.496094 47.871094 C 12.804688 48.054688 13.1875 48.054688 13.5 47.875 L 25 41.15625 L 36.5 47.875 C 36.8125 48.054688 37.195313 48.054688 37.503906 47.871094 C 37.8125 47.691406 38.003906 47.359375 38 47 L 38 3 C 38 2.449219 37.550781 2 37 2 L 13 2 C 12.96875 2 12.9375 2 12.90625 2 C 12.875 2 12.84375 2 12.8125 2 Z M 14 4 L 36 4 L 36 45.25 L 25.5 39.125 C 25.191406 38.945313 24.808594 38.945313 24.5 39.125 L 14 45.25 Z" />
              </svg>
            ))}
        </div>
      </div>
    </>
  );
};

export default CardDetailRouteMobile;
