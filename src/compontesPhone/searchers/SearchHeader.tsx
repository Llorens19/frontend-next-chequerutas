import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import MobileIcons from '@/compontesPhone/SVGs/MobileIcons';
import { useRouter } from 'next/navigation';
import useFilterRouteSearchOptions from '@/hooks/components/filters/FilterRoute/useFilterRouteSearchOptions.hook';

const SearchHeader = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [titleSelected, setTitleSelected] = useState('Buscar');
  const { titleOptions: options } = useFilterRouteSearchOptions();

  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<
    { label: string; value: string }[]
  >([]);

  useEffect(() => {
    if (isSearchOpen) {
      setFilteredOptions(options || []);
    }
  }, [isSearchOpen]);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handlePopState = () => {
      if (isSearchOpen) {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isSearchOpen]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filtered =
        options?.filter((option) =>
          option.label.toLowerCase().includes(value.toLowerCase())
        ) || [];
      setFilteredOptions(filtered);
    } else {
      setFilteredOptions(options || []);
    }
  };

  const handleSelectOption = (title: string) => {
    const filters = { title };
    const encodedFilters = btoa(JSON.stringify(filters));
    router.push(`/list-routes?filters=${encodedFilters}`);
    setTitleSelected(title);
    setIsSearchOpen(false);

  };

  const onClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      <div className="w-full relative" onClick={onClick}>
        <div className="pl-4 text-text1 ">{titleSelected}</div>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center">
          <MobileIcons size="20px" color="var(--text1)" icon="search" />
        </div>
      </div>

      <motion.div
        className="fixed w-screen h-screen bg-color2 top-0 left-0 z-[100000]"
        initial={{ y: '100%' }}
        animate={{ y: isSearchOpen ? '0%' : '100%' }}
        exit={{ y: '100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="flex w-full py-4 p-5 border-b-2 border-color3">
          <div className="w-full bg-color1  border-2 border-color3 rounded-full text-text2 flex items-center gap-2 relative h-10 p-4">
            <input
              ref={inputRef}
              className="w-full bg-transparent border-none outline-none pl-4 pr-10 text-text1"
              type="text"
              placeholder="Buscar actividades..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-text1 h-8 w-8 flex items-center justify-center">
              <MobileIcons size="20px" color="var(--text1)" icon="search" />
            </div>
          </div>
        </div>

        <div
          className="flex flex-col gap-1 mt-4 overflow-y-auto"
          style={{
            maxHeight: '60vh',
          }}
        >
          {filteredOptions.map((option, index) => (
            <div
              key={index}
              className="cursor-pointer hover:bg-color2 rounded-3xl text-text1 px-12 font-bold"
              onClick={() => handleSelectOption(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SearchHeader;
