import { IAdminFields } from '@/shared/interfaces/entities/admin.interface';
import { IClientFields } from '@/shared/interfaces/entities/client.interface';
import { Users } from '@prisma/client';

export type IUser = Users;

export interface IUserGeneric extends IUser {
  admin?: IAdminFields;
  client?: IClientFields;
}
