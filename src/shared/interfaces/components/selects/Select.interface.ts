export interface IOptionSelect {
  value: string | number;
  label: string;
}

export interface ISelectProps {
  label: string;
  id: string;
  options: IOptionSelect[];
  data: string | number;
  error?: string;
  placeholder?: string;
  onDataChange: (value: string) => void;
}
