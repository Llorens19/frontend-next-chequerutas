import { IAdminFields } from '@/interfaces/entities/admin.interface';
import { IClientFields } from '@/interfaces/entities/client.interface';
import { users } from '@prisma/client';

export type IUser = users;

export interface IUserGeneric extends IUser {
  admin?: IAdminFields;
  client?: IClientFields;
}
