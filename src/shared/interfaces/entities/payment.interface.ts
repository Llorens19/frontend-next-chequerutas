export interface IPayment {
  idPayment: string;
  idUser: string;
  type_payment: string;
  product: string;
  success: boolean;
  createdAt?: Date;
}