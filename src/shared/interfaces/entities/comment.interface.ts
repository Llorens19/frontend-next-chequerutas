import { Comments } from '@prisma/client';

// export interface IComment {
//   idComment: string;
//   idUser: string;
//   idRoute: string;
//   body: string;
//   imgComment: string;
//   idParentComment: string;
//   createdAt?: Date;
//   updatedAt?: Date;
//   user : IUserGeneric;
//   comments?: Comments[];

// }

export type IComment = Comments;

export interface IComents{
  categories:IComment[];
};
