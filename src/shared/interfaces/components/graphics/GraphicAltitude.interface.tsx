import { ICoordenate } from '@/shared/interfaces/entities/coordinate.interface';

export interface IPointAltitudeDistance {
  distance: number;
  altitude: number;
}

export interface IGraphicAltitudeProps {
  coordinates: ICoordenate[];
}