import { MapContainer, TileLayer, Polyline, Marker } from 'react-leaflet';
import L from 'leaflet';
import { IMapDetailsRouteParams } from '@/shared/interfaces/components/maps/MapDetailsRoute.interface';

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

const MapDetailsRoute = ({ coordinates }: IMapDetailsRouteParams) => {
  if (!coordinates || coordinates.length === 0) {
    return <p>No route data available</p>;
  }

  return (
    <MapContainer
      center={coordinates[0] || [0, 0]}
      zoom={12}
      className="h-full w-full rounded-3xl"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Polyline positions={coordinates} color="blue" />

      <Marker position={coordinates[0]} icon={greenIcon} />

      <Marker position={coordinates[coordinates.length - 1]} icon={redIcon} />
    </MapContainer>
  );
};

export default MapDetailsRoute;