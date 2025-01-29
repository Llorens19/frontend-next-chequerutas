import { Comments } from '@prisma/client';

export type IComment = Comments;

export interface IComents{
  categories:IComment[];
};
