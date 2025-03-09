import MobileIcons from '@/compontesPhone/SVGs/MobileIcons';

const HeaderRoute = () => {
  return (
    <header className="w-full fixed top-0 flex justify-between items-center h-16 bg-header py-4 text-white p-5 z-10">
      <div className="flex first-letter:items-center w-full">


        <div className="relative w-[calc(100%-45px)] bg-color2 p-1 border-2 border-color3 rounded-full text-text2 flex items-center gap-2">
          <div className="pl-4">Buscar</div>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-text1 h-8 w-8 flex items-center justify-center">
            <MobileIcons size="20px" color="var(--text1)" icon="search" />
          </div>
        </div>



        <div className = "flex justify-end items-end w-[45px]">
          <MobileIcons size="34px" color="var(--text1)" icon="filters" />
        </div>
      </div>
    </header>
  );
};
export default HeaderRoute;
