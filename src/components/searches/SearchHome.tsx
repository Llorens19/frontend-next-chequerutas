const SearchHome = () => {

  return (
    <div className="relative w-4/5 max-w-lg ">
      <input
        type="text"
        placeholder="Buscar actividades..."
        className="text-color2 w-full h-12 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-color3 focus:border-transparent shadow-md "
      />
      <div
        className="options absolute bg-color1 border border-gray-300 rounded-xl mt-1 w-full shadow-lg max-h-[30vh] overflow-y-auto z-20"
      >
        <div className="p-2 cursor-pointer hover:bg-color3 rounded-xl">
          Opcion1
        </div>
        <div className="p-2 cursor-pointer hover:bg-color3 rounded-xl">
          Opcion2
        </div>
        <div className="p-2 cursor-pointer hover:bg-color3 rounded-xl">
          Opcion3
        </div>
        <div className="p-2 cursor-pointer hover:bg-color3 rounded-xl">
          Opcion4
        </div>
        <div className="p-2 cursor-pointer hover:bg-color3 rounded-xl">
          Opcion5
        </div>
        <div className="p-2 cursor-pointer hover:bg-color3 rounded-xl">
          Opcion1
        </div>
        <div className="p-2 cursor-pointer hover:bg-color3 rounded-xl">
          Opcion2
        </div>
        <div className="p-2 cursor-pointer hover:bg-color3 rounded-xl">
          Opcion3
        </div>
        <div className="p-2 cursor-pointer hover:bg-color3 rounded-xl">
          Opcion4
        </div>
        <div className="p-2 cursor-pointer hover:bg-color3 rounded-xl">
          Opcion5
        </div>
        <div className="p-2 cursor-pointer hover:bg-color3 rounded-xl">
          Opcion1
        </div>
        <div className="p-2 cursor-pointer hover:bg-color3 rounded-xl">
          Opcion2
        </div>
        <div className="p-2 cursor-pointer hover:bg-color3 rounded-xl">
          Opcion3
        </div>
        <div className="p-2 cursor-pointer hover:bg-color3 rounded-xl">
          Opcion4
        </div>
        <div className="p-2 cursor-pointer hover:bg-color3 rounded-xl">
          Opcion5
        </div>
        <div className="p-2 cursor-pointer hover:bg-color3 rounded-xl">
          Opcion1
        </div>
        <div className="p-2 cursor-pointer hover:bg-color3 rounded-xl">
          Opcion2
        </div>
        <div className="p-2 cursor-pointer hover:bg-color3 rounded-xl">
          Opcion3
        </div>
        <div className="p-2 cursor-pointer hover:bg-color3 rounded-xl">
          Opcion4
        </div>
        <div className="p-2 cursor-pointer hover:bg-color3 rounded-xl">
          Opcion5
        </div>
      </div>

      <button
        type="button"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-color3 text-white h-8 w-8 rounded-full flex items-center justify-center hover:bg-color4 transition z-[9999]"
        aria-label="Buscar"
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
