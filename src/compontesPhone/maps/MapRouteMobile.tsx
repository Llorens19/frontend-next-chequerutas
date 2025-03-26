'use client';

import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  useMap,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import L from 'leaflet';
import MobileIcons from '@/compontesPhone/SVGs/MobileIcons';
import { motion } from 'framer-motion';

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

const greenIcon = new L.Icon({
  iconUrl:
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const redIcon = new L.Icon({
  iconUrl:
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapRouteMobile = ({
  coordinates,
}: {
  coordinates?: [number, number][];
}) => {
  const hasCoordinates = coordinates && coordinates.length > 0;
  const initialCenter = hasCoordinates ? coordinates[0] : [40.4168, -3.7038];
  const [center, setCenter] = useState<[number, number]>(
    initialCenter as [number, number]
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
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

  useEffect(() => {
    const handleBackButton = () => {
      if (isOpen) {
        setIsOpen(false);
        return true;
      }
      return false;
    };

    window.history.pushState(null, '', window.location.href);
    window.onpopstate = handleBackButton;

    return () => {
      window.onpopstate = null;
    };
  }, [isOpen]);

  const onClickOpen = () => {
    setIsOpen(true);
    window.history.pushState(null, '', window.location.href);
  };

  const onClickClose = () => {
    setIsOpen(false);
    window.history.back();
  };

  return (
    <>
      {isOpen && (
        <motion.div
          className="fixed w-screen h-screen bg-color2 top-0 left-0 z-[100000]"
          initial={{ y: '100%' }}
          animate={{ y: isOpen ? '0%' : '100%' }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <button
            className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md z-[100000000000]"
            onClick={onClickClose}
          >
            ❌
          </button>
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
                <Marker position={coordinates[0]} icon={greenIcon} />
                {coordinates.length > 1 && (
                  <Marker
                    position={coordinates[coordinates.length - 1]}
                    icon={redIcon}
                  />
                )}
              </>
            )}

            {hasCoordinates && (
              <Polyline positions={coordinates} color="blue" />
            )}
          </MapContainer>
        </motion.div>
      )}
      <div className="w-full" onClick={onClickOpen}>
        <MobileIcons icon="map" color="var(--text1)" size={'34px'} />
      </div>
    </>
  );
};

export default MapRouteMobile;
