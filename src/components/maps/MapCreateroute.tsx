'use client';

import { MapContainer, TileLayer, Marker, Polyline,useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import L from 'leaflet';



const ChangeView = ({ center, zoom }: { center: [number, number]; zoom: number }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
};

const greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
});

const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
});


const MapRoute = ({ coordinates }: { coordinates?: [number, number][] }) => {
  const hasCoordinates = coordinates && coordinates.length > 0;
  const initialCenter = hasCoordinates ? coordinates[0] : [40.4168, -3.7038];
  const [center, setCenter] = useState<[number, number]>(initialCenter as [number, number]);
  const [zoom, setZoom] = useState<number>(hasCoordinates ? 13 : 7);

  useEffect(() => {
    if (hasCoordinates) {
      setCenter(coordinates[0]);
      setZoom(13);
    } else {
      setCenter([40.4168, -3.7038]);
      setZoom(7);
    }
  }, [coordinates]);

  return (
    <MapContainer
      zoom={zoom}
      className="w-full h-full rounded-lg shadow-lg"
      style={{ height: '100%', width: '100%' }}
      zoomControl={false}
    >
      <ChangeView center={center} zoom={zoom} />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {hasCoordinates && (
        <>
          <Marker position={coordinates[0]} icon={greenIcon}/>
          {coordinates.length > 1 && (
            <Marker position={coordinates[coordinates.length - 1]} icon={redIcon}/>
          )}
        </>
      )}

      {hasCoordinates && <Polyline positions={coordinates} color="blue" />}
    </MapContainer>
  );
};

export default MapRoute;