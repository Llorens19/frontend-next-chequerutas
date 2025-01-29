export interface ISearchOption {
  label: string;
  value: string;
}


export interface ISearchFiltersProps {
  options: ISearchOption[];
  onSelect: (value: string) => void;
}
