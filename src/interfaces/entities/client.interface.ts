import { IUser } from '@/interfaces/entities/user.interface';
import { Clients } from '@prisma/client';


export type IClientFields = Clients;

export interface IClient extends IUser{
  client: IClientFields;
}