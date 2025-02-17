'use client';
import { ISearchFiltersProps } from '@/shared/interfaces/components/searchers/SearchFilters.interface';
import useSearchFilters from '@/hooks/components/searchers/SearchFilters/useSearchFilters.hook';
import { useEffect } from 'react';

const SearchFilters = ({ options, value, colorText ='text1', color='color3', border= 'text1', onSelect }: ISearchFiltersProps) =>{

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
        placeholder="Buscar"
        className={`text-text1 text-ms bg-${color} w-full p-1.5 px-4 pr-10 rounded-3xl border-2 border-${border} focus:outline-none   placeholder-text3`}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
      />
      {isOpen && filteredOptions.length > 0 && (
        <div className={`options absolute bg-${color}   border-2 border-${border} rounded-3xl mt-1 w-full   max-h-[30vh] overflow-y-auto z-20`}>
          {filteredOptions.map((option, index) => (
            <div
              key={index}
              className={`p-1 pl-3 cursor-pointer hover:bg-color2 rounded-xl text-${colorText}`}
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