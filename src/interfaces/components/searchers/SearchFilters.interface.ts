export interface ISearchFiltersProps {
  options: {
    label: string;
    value: string;
  }[];
  onSelect: (value: string) => void;
}
