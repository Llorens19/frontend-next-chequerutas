import { IRoute } from '@/shared/interfaces/entities/route.interface';
import { Locations } from '@prisma/client';

export type ILocation = Locations;

// export interface ILocation {
//   idLocation: string;
//   nLocation: string;
//   latitude: number;
//   longitude: number;
//   createdAt?: Date;
//   routes?: IRoute[];
// };

export interface ILocations {
  locations: ILocation[];
  count?: number;
};