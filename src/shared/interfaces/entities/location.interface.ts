import { Locations } from '@prisma/client';

export type ILocation = Locations;

export interface ILocations {
  locations: ILocation[];
  count?: number;
};