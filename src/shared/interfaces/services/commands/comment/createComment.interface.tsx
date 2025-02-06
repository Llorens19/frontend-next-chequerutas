export interface ICreateComment {
  idRoute: string;
  body: string;
  idParentComment?: string;
}