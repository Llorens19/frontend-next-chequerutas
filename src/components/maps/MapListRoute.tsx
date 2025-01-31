'use client';

import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import L from 'leaflet';
import markerIconUrl from 'leaflet/dist/images/marker-icon.png';
import { IRoutePointsFilters } from '@/interfaces/services/route/getRoutePoints.interface';
import { usePointsQuery } from '@/queries/points.query';
import { useLocationsQuery } from '@/queries/location.query';
import { ILocation } from '@/interfaces/entities/location.interface';

interface MapListRoutesProps {
  center?: [number, number];
  zoom?: number;
}

const ChangeView = ({
  center,
  zoom,
}: {
  center: [number, number];
  zoom: number;
}) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
};

const customIcon = new L.Icon({
  iconUrl: markerIconUrl.src,
  iconSize: [20, 32],
  iconAnchor: [10, 32],
  popupAnchor: [1, -30],
});

const MapListRoutes = () => {

  const[center, setCenter] = useState<[number, number]>([40.4168, -3.7038]);
  const[zoom, setZoom] = useState<number>(6);

  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<IRoutePointsFilters>({});

  useEffect(() => {
    const encodedFilters = searchParams.get('filters');

    if (encodedFilters) {
      try {
        const decoded = JSON.parse(atob(encodedFilters));
        setFilters({ ...decoded });
      } catch (error) {
        console.error('Error decoding filters:', error);
      }
    }

  }, [searchParams]);

  const { data: markers } = usePointsQuery(filters);

  const { data: locations } = useLocationsQuery();

  useEffect(() => {
    if (locations) {
      const resp = locations.locations.filter(
        (location) => location.idLocation === filters.location
      );
      if (resp.length > 0) {
        const location = resp[0] as ILocation;
        setCenter([location.latitude, location.longitude]);
        setZoom(12);
      }else{
        setCenter([40.4168, -3.7038]);
        setZoom(6);
      }
    }

  }, [locations, filters]);

  return (
    <MapContainer
      className="w-full h-full bg-gray-200 flex items-center justify-center"
      style={{ height: '100%', width: '100%' }}
      zoomControl={false}
    >
      <ChangeView center={center} zoom={zoom} />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {markers &&
        markers.points.map((position, index) => (
          <Marker
            key={index}
            position={position.startCoordinates}
            icon={customIcon}
          />
        ))}
    </MapContainer>
  );
};

export default MapListRoutes;