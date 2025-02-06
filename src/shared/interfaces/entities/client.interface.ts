import { IUser } from '@/shared/interfaces/entities/user.interface';


export interface IClientFields {
  idClient: string;
  idUser: string;
  phone: string;
}

export interface IClient extends IUser{
  client: IClientFields;
}