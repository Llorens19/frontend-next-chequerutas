import { IUserGeneric } from '@/shared/interfaces/entities/user.interface';

export interface IFollow{
  idUser: string;
  userFollowed: string;
  createdAt: string;
  followerUser: IUserGeneric;
  followingUser: IUserGeneric;
}