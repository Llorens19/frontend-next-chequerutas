'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useFilterRouteSearchOptions from '@/hooks/components/filters/FilterRoute/useFilterRouteSearchOptions.hook';

const SearchHome = () => {
  const { titleOptions: options } = useFilterRouteSearchOptions();
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<{ label: string, value: string }[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filtered = options?.filter(option =>
        option.label.toLowerCase().includes(value.toLowerCase())
      ) || [];
      setFilteredOptions(filtered);
      setShowDropdown(filtered.length > 0);
    } else {
      setShowDropdown(false);
    }
  };

  const handleSelectOption = (title: string) => {
    const filters = { title };
    const encodedFilters = btoa(JSON.stringify(filters));

    router.push(`/list-routes?filters=${encodedFilters}`);
  };

  return (
    <div className="relative w-4/5 max-w-lg">
      <input
        type="text"
        placeholder="Buscar actividades..."
        className="text-black w-full h-12 px-4 pr-10 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-color3 focus:border-transparent"
        value={searchTerm}
        onChange={handleSearchChange}
        onFocus={() => setShowDropdown(filteredOptions.length > 0)}
        onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
      />

      {showDropdown && (
        <div className="absolute bg-color1 border border-gray-300 rounded-3xl mt-1 w-full max-h-[30vh] overflow-y-auto z-20 shadow-lg">
          {filteredOptions.map((option, index) => (
            <div
              key={index}
              className="p-2 cursor-pointer hover:bg-color3 rounded-3xl text-text1"
              onClick={() => handleSelectOption(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}

      <button
        type="button"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-color3 text-text1 h-8 w-8 rounded-full flex items-center justify-center hover:bg-color4 transition z-[9999]"
        aria-label="Buscar"
        onClick={() => {
          if (searchTerm.trim() !== '') {
            handleSelectOption(searchTerm);
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 16l-4-4m0 0l4-4m-4 4h16"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchHome;
