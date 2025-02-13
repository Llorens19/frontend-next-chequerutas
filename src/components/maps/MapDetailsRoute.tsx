import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import { IMapDetailsRouteParams } from '@/shared/interfaces/components/maps/MapDetailsRoute.interface';

const MapDetailsRoute = ({coordinates}: IMapDetailsRouteParams) => {
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
    </MapContainer>
  );
};

export default MapDetailsRoute;
