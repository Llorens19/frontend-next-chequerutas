export interface ICardProductProps{
  title: string;
  description:{
    status: number;
    message: string;
  }[];
  amountEur: number;
  savings?: number;
  popular?: boolean;
  isButtonEnabled?: boolean;
  onSubscribe?: () => void;
}
