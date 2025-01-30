import { Routes } from '@prisma/client';

export type IRoute = Routes;

export interface IRoutes {
  routes: IRoute[];
  count?: number;
};