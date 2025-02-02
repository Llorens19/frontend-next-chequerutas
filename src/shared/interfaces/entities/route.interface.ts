import { ICoordenate } from '@/shared/interfaces/entities/coordinate.interface';
import { IImagesRoutes } from '@/shared/interfaces/entities/imagesRoutes.interface';
import { Routes } from '@prisma/client';


export interface IRoute extends Omit<Routes, 'coordinates' | 'imagesRoutes'> {
  imagesRoutes?: IImagesRoutes[];
  coordinates?: ICoordenate[];
};

export interface IRoutes {
  routes: IRoute[];
  count?: number;
};