import { IUser } from '@/interfaces/entities/user.interface';
import { Admins } from '@prisma/client';

export type IAdminFields = Admins;

export interface IAdmin extends IUser{
  admin: IAdminFields;
}