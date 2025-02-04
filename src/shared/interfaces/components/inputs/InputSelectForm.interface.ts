import { IOptionSelect } from '@/shared/interfaces/components/selects/Select.interface';

export interface IInputSelectFormProps {
  label: string;
  id: string;
  options: IOptionSelect[];
  data: string;
  error?: string;
  placeholder?: string;
  onChange: (value: string) => void;
}