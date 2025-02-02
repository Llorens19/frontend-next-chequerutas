export interface ISearchOption {
  label: string;
  value: string;
}


export interface ISearchFiltersProps {
  options: ISearchOption[];
  value: string;
  onSelect: (value: string) => void;
}
