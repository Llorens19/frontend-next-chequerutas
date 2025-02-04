export interface IInputTextFormProps {
  label: string;
  type?: string;
  id: string;
  placeholder?: string;
  data: string;
  error?: string;
  readonly?: boolean;
  onChange: (value: string) => void;
}