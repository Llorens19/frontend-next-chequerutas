import { IImagesRoutes } from '@/shared/interfaces/entities/imagesRoutes.interface';
import { Routes } from '@prisma/client';


export interface IRoute extends Routes {
  imagesRoutes?: IImagesRoutes[];
};

export interface IRoutes {
  routes: IRoute[];
  count?: number;
};