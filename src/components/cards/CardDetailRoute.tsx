'use client';
import GalleryDetails from '@/components/galleries/GalleryDatails';
import { ICardDetailRouteParams } from '@/shared/interfaces/components/cards/CardDetailsRoute.interface';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import GraphicAltitude from '@/components/graphics/GraphicAltitude';

const UpArrow = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
);

const DownArrow = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 5v14M5 12l7 7 7-7" />
  </svg>
);

const CardDetailRoute = ({ route }: ICardDetailRouteParams) => {


  const coordinates = [
    [38.829725, -0.602636, 100],
    [38.830201, -0.601043, 150],
    [38.830800, -0.600500, 100],
    [38.831500, -0.599900, 250],
    [38.832100, -0.599200, 300],
    [38.833000, -0.598500, 350],
    [38.834000, -0.597900, 400],
    [38.834800, -0.597000, 350],
    [38.835500, -0.596300, 500],
    [38.836000, -0.595600, 550],
    [38.836500, -0.594900, 100]
  ];








  return (
    <>
      <div className="flex flex-col w-2/3 m-auto mt-24 bg-color2 p-16 rounded-lg">
        <GalleryDetails route={route} />

        <div className="flex flex-col gap-4 mt-8">
          <h1 className="text-4xl font-bold text-center">{route.title}</h1>
          <p className="text-lg text-center text-text4">{route.description}</p>
        </div>

        <div className='flex align-center items-center gap-4 mt-8'>
        <div className="flex gap-8 mt-8 w-1/2 m-auto h-full">

          <div className="flex flex-col gap-4 w-1/2 h-full">
            <div className="flex align-center items-center gap-4">
              <p className="text-lg font-bold text-color4">Tiempo</p>
              <p className="text-lg text-text4">{route.duration} min</p>
            </div>
            <div className="flex align-center items-center gap-4">
              <p className="text-lg font-bold text-color4">Distancia</p>
              <p className="text-lg text-text4">
                {route.distance!.toFixed(2).toString().replace('.', ',')} km
              </p>
            </div>
            <div className="flex align-center items-center gap-4">
              <p className="text-lg font-bold text-color4">Nivel</p>
              <p className="text-lg text-text4">{route.level}</p>
            </div>
            <div className="flex align-center items-center gap-4">
              <p className="text-lg font-bold text-color4">Rating promedio</p>
              <p className="text-lg text-text4">
                {route.averageRating?.toFixed(1) ?? 'N/A'}
              </p>
            </div>
          </div>




          <div className="flex flex-col gap-4 w-1/2 ">

            <div className="flex align-center items-center">
              <p className="text-lg font-bold text-color4 mr-4">
                A. positiva
              </p>
              <p className="text-lg text-text4">
                {route.positiveGradient ?? 'N/A'} m{' '}
              </p>
              <span className="text-green-500">
                <UpArrow />
              </span>
            </div>
            <div className="flex align-center items-center">
              <p className="text-lg font-bold text-color4 mr-4">
                A. negativa
              </p>
              <p className="text-lg text-text4 flex">
                {route.negativeGradient ?? 'N/A'} m{' '}
              </p>
              <span className="text-red-500">
                <DownArrow />
              </span>
            </div>
            <div className="flex align-center items-center">
              <p className="text-lg font-bold text-color4 mr-4">
                A. acumulada
              </p>
              <p className="text-lg text-text4 flex">
                {route.cumulativeGradient ?? 'N/A'} m{' '}
              </p>
              <span className="text-green-500">
                <UpArrow />
              </span>{' '}
              <span className="text-red-500">
                <DownArrow />
              </span>
            </div>
          </div>


        </div>




        <div className="mt-8 w-1/2 h-96">
              <MapContainer
                center={(route.coordinates as L.LatLngTuple[])[0] || [0, 0]}
                zoom={15}
                className="h-full w-full rounded-lg"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; OpenStreetMap contributors"
                />
                  <Polyline positions={route.coordinates as L.LatLngTuple[]} color="blue" />
              </MapContainer>
            </div>





            </div>

      </div>
    </>
  );
};

export default CardDetailRoute;
