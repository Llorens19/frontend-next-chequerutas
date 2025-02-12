import { IComment } from '@/shared/interfaces/entities/comment.interface';
import { ICoordenate } from '@/shared/interfaces/entities/coordinate.interface';
import { IFavorite } from '@/shared/interfaces/entities/favorite.interface';
import { IImagesRoutes } from '@/shared/interfaces/entities/imagesRoutes.interface';
import { IUserGeneric } from '@/shared/interfaces/entities/user.interface';
import { Routes } from '@prisma/client';


// export interface IRoute extends Omit<Routes, 'coordinates' | 'imagesRoutes'> {
//   imagesRoutes?: IImagesRoutes[];
//   coordinates?: ICoordenate[];
// };

export interface IRoute {
  idRoute: string;
  idUser: string;
  title: string;
  description: string;
  coordinates: ICoordenate[];
  level: string;
  distance: number;
  duration: number;
  aveageRating: number;
  startCoordinates: ICoordenate;
  idCategory: string;
  slugRoute: string;
  isPublic: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  positiveGradient: number;
  negativeGradient: number;
  cumulativeGradient: number;
  idLocation: string;
  comments?: IComment[];
  favorites?: IFavorite[];
  imagesRoutes?: IImagesRoutes[];
  user?: IUserGeneric;

};

export interface IRoutes {
  routes: IRoute[];
  count?: number;
};