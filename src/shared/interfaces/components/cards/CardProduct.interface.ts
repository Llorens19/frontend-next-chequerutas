export interface ICardProductProps{
  title: string;
  description:{
    status: number;
    message: string;
  }[];
  amountEur: number;
  savings?: number;
  popular?: boolean;
  onSubscribe?: () => void;
}
