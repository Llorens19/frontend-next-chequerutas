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

const CardDetailRoute = ({ route }: ICardDetailRouteParams) => {

  const { data:userLogged } = useGetUserQuery();
  const { isFavorite, onFavorite, onUnfavorite } = useFavorite(route.idRoute);


  return (
    <>
      <div className="flex flex-col w-4/5 m-auto mt-24 bg-color2 p-16 rounded-lg shadow-lg">
        <div className="flex flex-col gap-4 mb-8">
          <h1 className="text-4xl font-bold text-center text-text1">{route.title}</h1>
          <p className="text-lg text-center text-text4">{route.description}</p>
        </div>

        <GalleryDetails route={route} />




        <div className="flex flex-wrap xl:flex-nowrap items-center gap-4 mt-8 w-full">




          <div className="flex gap-8 w-full xl:w-1/2 m-auto h-full">
            <div className="flex flex-col gap-4 w-full sm:w-1/2 h-full">
              <div className="flex items-center gap-4">
                <p className="text-lg font-bold text-text4">Duración</p>
                <p className="text-lg text-text2">{route.duration} min</p>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-lg font-bold text-text4">Distancia</p>
                <p className="text-lg text-text2">
                  {route.distance!.toFixed(2).toString().replace('.', ',')} km
                </p>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-lg font-bold text-text4">Nivel</p>
                <p className="text-lg text-text2">{route.level}</p>
              </div>
              {/* <div className="flex items-center gap-4">
                <p className="text-lg font-bold text-text4">Rating promedio</p>
                <p className="text-lg text-text4">
                  {route.averageRating?.toFixed(1) ?? 'N/A'}
                </p>
              </div> */}
            </div>


            <div className="flex flex-col gap-4 w-full sm:w-1/2">
              <div className="flex items-center">
                <p className="text-lg font-bold text-text4 mr-4">
                  A. positiva
                </p>
                <p className="text-lg text-text2">
                  {route.positiveGradient ?? 'N/A'} m
                </p>
                <span className="text-green-500">
                  <UpArrow />
                </span>
              </div>
              <div className="flex items-center">
                <p className="text-lg font-bold text-text4 mr-4">
                  A. negativa
                </p>
                <p className="text-lg text-text2 flex">
                  {route.negativeGradient ?? 'N/A'} m
                </p>
                <span className="text-red-500">
                  <DownArrow />
                </span>
              </div>
              <div className="flex items-center">
                <p className="text-lg font-bold text-text4 mr-4">
                  A. acumulada
                </p>
                <p className="text-lg text-text2 flex">
                  {route.cumulativeGradient ?? 'N/A'} m
                </p>
                <span className="text-green-500">
                  <UpArrow />
                </span>
                <span className="text-red-500">
                  <DownArrow />
                </span>
              </div>
            </div>
          </div>
          <div className="mt-8 w-full xl:w-1/2 mb-8 xl:mt-0">
            <GraphicAltitude coordinates={route.coordinates!} />
          </div>
        </div>

        <div className="w-full mb-8">
        {userLogged &&
              (isFavorite ? (
                <svg
                  className="cursor-pointer hover:scale-105 transition-transform"
                  onClick={onUnfavorite}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="50px"
                  height="50px"
                  fill="white"
                >
                  <path d="M 37 48 C 36.824219 48 36.652344 47.953125 36.496094 47.863281 L 25 41.15625 L 13.503906 47.863281 C 13.195313 48.042969 12.8125 48.046875 12.503906 47.867188 C 12.191406 47.6875 12 47.359375 12 47 L 12 3 C 12 2.449219 12.449219 2 13 2 L 37 2 C 37.554688 2 38 2.449219 38 3 L 38 47 C 38 47.359375 37.808594 47.6875 37.496094 47.867188 C 37.34375 47.957031 37.171875 48 37 48 Z" />
                </svg>
              ) : (
                <svg
                  className="cursor-pointer hover:scale-105 transition-transform"
                  onClick={onFavorite}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="50px"
                  height="50px"
                  fill="white"
                >
                  <path d="M 12.8125 2 C 12.335938 2.089844 11.992188 2.511719 12 3 L 12 47 C 11.996094 47.359375 12.1875 47.691406 12.496094 47.871094 C 12.804688 48.054688 13.1875 48.054688 13.5 47.875 L 25 41.15625 L 36.5 47.875 C 36.8125 48.054688 37.195313 48.054688 37.503906 47.871094 C 37.8125 47.691406 38.003906 47.359375 38 47 L 38 3 C 38 2.449219 37.550781 2 37 2 L 13 2 C 12.96875 2 12.9375 2 12.90625 2 C 12.875 2 12.84375 2 12.8125 2 Z M 14 4 L 36 4 L 36 45.25 L 25.5 39.125 C 25.191406 38.945313 24.808594 38.945313 24.5 39.125 L 14 45.25 Z" />
                </svg>
              ))}
        </div>

        <div className="w-full aspect-[2/1]">
          <MapDetailsRoute coordinates={route.coordinates as L.LatLngTuple[]} />
        </div>
      </div>
    </>
  );
};

export default CardDetailRoute;
