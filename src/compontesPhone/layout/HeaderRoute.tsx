import SearchHeader from '@/compontesPhone/searchers/SearchHeader';
import MobileIcons from '@/compontesPhone/SVGs/MobileIcons';

const HeaderRoute = () => {
  return (
    <header className="w-full fixed top-0 flex justify-between items-center h-16 bg-header py-4 text-white p-5 z-10">
      <div className="flex first-letter:items-center w-full">
        <div className="w-[calc(100%-45px)] bg-color2 p-1 border-2 border-color3 rounded-full text-text2 flex items-center gap-2">
          <SearchHeader />
        </div>

        <div className="flex justify-end items-end w-[45px]">
          <MobileIcons size="34px" color="var(--text1)" icon="filters" />
        </div>
      </div>
    </header>
  );
};
export default HeaderRoute;
