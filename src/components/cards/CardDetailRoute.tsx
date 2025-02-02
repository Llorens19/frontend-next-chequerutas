'use client';
import GalleryDetails from '@/components/galleries/GalleryDatails';
import { ICardDetailRouteParams } from '@/shared/interfaces/components/cards/CardDetailsRoute.interface';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import GraficaPuntos from '@/components/graphics/GraphicAltitude';
import MapDetailsRoute from '@/components/maps/MapDetailsRoute';
import UpArrow from '@/components/SVGs/UpArrow';
import DownArrow from '@/components/SVGs/DownArrow';

const CardDetailRoute = ({ route }: ICardDetailRouteParams) => {

  return (
    <>
      <div className="flex flex-col w-2/3 m-auto mt-24 bg-color2 p-16 rounded-lg">
        <div className="flex flex-col gap-4 mb-8">
          <h1 className="text-4xl font-bold text-center">{route.title}</h1>
          <p className="text-lg text-center text-text4">{route.description}</p>
        </div>

        <GalleryDetails route={route} />

        <div className="flex flex-wrap xl:flex-nowrap items-center gap-4 mt-8 w-full">
          <div className="flex gap-8 w-full xl:w-1/2 m-auto h-full">
            <div className="flex flex-col gap-4 w-full sm:w-1/2 h-full">
              <div className="flex items-center gap-4">
                <p className="text-lg font-bold text-color4">Tiempo</p>
                <p className="text-lg text-text4">{route.duration} min</p>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-lg font-bold text-color4">Distancia</p>
                <p className="text-lg text-text4">
                  {route.distance!.toFixed(2).toString().replace('.', ',')} km
                </p>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-lg font-bold text-color4">Nivel</p>
                <p className="text-lg text-text4">{route.level}</p>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-lg font-bold text-color4">Rating promedio</p>
                <p className="text-lg text-text4">
                  {route.averageRating?.toFixed(1) ?? 'N/A'}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full sm:w-1/2">
              <div className="flex items-center">
                <p className="text-lg font-bold text-color4 mr-4">
                  A. positiva
                </p>
                <p className="text-lg text-text4">
                  {route.positiveGradient ?? 'N/A'} m
                </p>
                <span className="text-green-500">
                  <UpArrow />
                </span>
              </div>
              <div className="flex items-center">
                <p className="text-lg font-bold text-color4 mr-4">
                  A. negativa
                </p>
                <p className="text-lg text-text4 flex">
                  {route.negativeGradient ?? 'N/A'} m
                </p>
                <span className="text-red-500">
                  <DownArrow />
                </span>
              </div>
              <div className="flex items-center">
                <p className="text-lg font-bold text-color4 mr-4">
                  A. acumulada
                </p>
                <p className="text-lg text-text4 flex">
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
            <GraficaPuntos coordinates={route.coordinates!} />
          </div>
        </div>

        <div className="w-full h-96">
          <MapDetailsRoute coordinates={route.coordinates as L.LatLngTuple[]} />
        </div>
      </div>
    </>
  );
};

export default CardDetailRoute;
