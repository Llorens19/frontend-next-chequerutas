import { IUserGeneric } from '@/shared/interfaces/entities/user.interface';

export interface IComment {
  idComment: string;
  idUser: string;
  idRoute: string;
  body: string;
  imgComment: string;
  idParentComment: string;
  createdAt?: Date;
  updatedAt?: Date;
  user : IUserGeneric;
  comments?: IComment[];

}

export interface IComments {
  comments: IComment[];
};
