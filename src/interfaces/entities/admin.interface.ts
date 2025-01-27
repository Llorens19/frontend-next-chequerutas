import { IUser } from '@/interfaces/entities/user.interface';
import { admins } from '@prisma/client';

export type IAdminFields = admins;

export interface IAdmin extends IUser{
  admin: IAdminFields;
}