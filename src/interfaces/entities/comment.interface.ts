import { comments } from '@prisma/client';

export type IComment = comments;

export interface IComents{
  categories:IComment[];
};
