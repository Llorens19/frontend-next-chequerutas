const CardRouteSkeleton = () => {
  return (
    <div className="flex bg-color2 rounded-3xl overflow-hidden p-8 mb-8 animate-pulse">
      <div className="w-1/2 bg-color3 rounded-3xl h-80"></div>

      <div className="w-1/2 ml-8 flex flex-col justify-between">
        <div>
          <div className="h-6 bg-color3 rounded w-3/4 mx-auto"></div>
          <div className="h-4 bg-color3 rounded w-5/6 mx-auto mt-4"></div>

          <div className="flex mt-12">
            <ul className="w-1/2">
              <li className="h-4 bg-color3 rounded w-3/4 mb-2"></li>
              <li className="h-4 bg-color3 rounded w-3/4"></li>
            </ul>
            <ul className="w-1/2">
              <li className="h-4 bg-color3 rounded w-3/4 mb-2"></li>
              <li className="h-4 bg-color3 rounded w-3/4"></li>
            </ul>
          </div>
        </div>


      </div>
    </div>
  );
};

export default CardRouteSkeleton;
