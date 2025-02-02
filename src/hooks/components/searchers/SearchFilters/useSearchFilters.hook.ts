import { ISearchOption } from '@/shared/interfaces/components/searchers/SearchFilters.interface';
import { useState, useMemo } from 'react';

const useSearchFilters = (options: ISearchOption[], onSelect: (value: string) => void) => {

  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredOptions = useMemo(() => {
    return options.filter((option) =>
      option.label.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [options, searchQuery]);

  const handleOptionClick = (value: string, label: string) => {
    onSelect(value);
    setSearchQuery(label);
    setIsOpen(false);
  };

  return {
    isOpen,
    searchQuery,
    filteredOptions,
    setSearchQuery,
    setIsOpen,
    handleOptionClick,
  };
};

export default useSearchFilters;
