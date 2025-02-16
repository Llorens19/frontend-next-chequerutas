export interface ISearchOption {
  label: string;
  value: string;
}


export interface ISearchFiltersProps {
  options: ISearchOption[];
  value: string;
  colorText?: string;
  color?: string;
  border?: string;
  onSelect: (value: string) => void;
}
