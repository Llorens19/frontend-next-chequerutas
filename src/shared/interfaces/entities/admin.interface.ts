import { IUser } from '@/shared/interfaces/entities/user.interface';

export interface IAdminFields {
  idAdmin: string;
  idUser: string;
}

export interface IAdmin extends IUser{
  admin: IAdminFields;
}