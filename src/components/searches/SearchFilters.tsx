'use client';
import { ISearchFiltersProps } from '@/interfaces/components/searchers/SearchFilters.interface';
import useSearchFilters from '@/hooks/components/searchers/SearchFilters/useSearchFilters.hook';
import { useEffect } from 'react';

const SearchFilters = ({ options, value, onSelect }: ISearchFiltersProps) =>{

  const {
    isOpen,
    searchQuery,
    filteredOptions,
    setSearchQuery,
    setIsOpen,
    handleOptionClick,
  } = useSearchFilters(options, onSelect);



  useEffect(() => {
    const label = options.find(option => option.value === value)?.label || '';
    setSearchQuery(label);
  }, [value, options]);

  return (
    <div className="relative w-fullmax-w-lg">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Buscar por ubicación"
        className="text-white text-ms bg-color3 w-full p-1.5 px-4 pr-10 rounded-lg border-2 focus:outline-none shadow-md"
        onFocus={() => setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
      />
      {isOpen && filteredOptions.length > 0 && (
        <div className="options absolute bg-color3 rounded-lg mt-1 w-full shadow-lg max-h-[30vh] overflow-y-auto z-20">
          {filteredOptions.map((option, index) => (
            <div
              key={index}
              className="p-1 pl-3 cursor-pointer hover:bg-color2 rounded-xl text-white"
              onClick={() => handleOptionClick(option.value, option.label)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchFilters;