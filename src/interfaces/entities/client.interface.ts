import { IUser } from '@/interfaces/entities/user.interface';
import { clients } from '@prisma/client';


export type IClientFields = clients;

export interface IClient extends IUser{
  client: IClientFields;
}