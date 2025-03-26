'use client';
import { useRef, useState } from 'react';


const RecordRouteMobile = () => {
  const [tracking, setTracking] = useState<boolean>(false);
  const [locations, setLocations] = useState<[number, number, number][]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTracking = () => {
    if (tracking) return;
    setTracking(true);

    intervalRef.current = setInterval(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude, altitude } = position.coords;
          setLocations((prev) => [
            ...prev,
            [latitude, longitude, altitude || 0],
          ]);
        },
        (error) => console.error('Error getting location:', error),
        { enableHighAccuracy: true }
      );
    }, 1000);
  };

  const stopTracking = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setTracking(false);
    console.log('Final Route:', locations);
  };

  return (
    <div className="p-4 flex flex-col gap-4 items-center">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={startTracking}
        disabled={tracking}
      >
        Grabar Ruta
      </button>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded"
        onClick={stopTracking}
        disabled={!tracking}
      >
        Finalizar Grabación
      </button>
      <pre className="text-xs bg-gray-100 p-2 rounded w-full overflow-auto">
        {JSON.stringify(locations, null, 2)}
      </pre>
    </div>
  );
};

export default RecordRouteMobile;
