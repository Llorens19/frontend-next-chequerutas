export interface INotification {
  idNotification: string;
  idUser: string;
  title: string;
  body: string;
  readed: boolean;
  deleted: boolean;
  type: string;
  createdAt?: Date;
}
