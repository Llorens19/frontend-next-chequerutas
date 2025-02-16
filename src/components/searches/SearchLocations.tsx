import { RouteQueryService } from '@/services/queries/route.queryService';
import { IOptionSelect } from '@/shared/interfaces/components/selects/Select.interface';
import { useState, useEffect } from 'react';

const SearchLocations = ({ onSelect }: {onSelect: (value: string) => void }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<IOptionSelect[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const fetchData = async () => {
    if (searchQuery.length === 0) return;
    const locations = await RouteQueryService.searchLocations(searchQuery);
    setFilteredOptions(locations.locations);
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      fetchData();
    } else {
      setFilteredOptions([]);
    }
  }, [searchQuery]);

  const handleOptionClick = (value: string, label: string) => {
    setSearchQuery(label);
    setIsOpen(false);
    if (onSelect) {
      onSelect(value);
    }
  };

  return (
    <div className="relative w-full max-w-lg">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Buscar por ubicación"
        className="text-text1 text-ms bg-color1 w-full p-1.5 px-4 pr-10 rounded-3xl border-2 border-text1 focus:outline-none placeholder-text3"
        onFocus={() => setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
      />
      {isOpen && filteredOptions.length > 0 && (
        <div className="options absolute bg-color1 border-2 border-text1 rounded-3xl mt-1 w-full max-h-[30vh] overflow-y-auto z-20">
          {filteredOptions.map((option, index) => (
            <div
              key={index}
              className="p-1 pl-3 cursor-pointer hover:bg-color3 rounded-3xl text-text1 bg-color1"
              onClick={() => handleOptionClick(option.value as string, option.label)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchLocations;
