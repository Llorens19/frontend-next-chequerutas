import { routes } from '@prisma/client';

export type IRoute = routes;

export interface IRoutes {
  routes: IRoute[];
  count?: number;
};