import Image from 'next/image';

const CardRouteMobile = () => {

  return (
    <>
      <div className="bg-color3 p-4 border border-contrast3 rounded-lg flex flex-col">
        {/* Fila 1 */}

        <div className="flex justify-center align-center mb-4 border-b  items-center border-contrast3 pb-2 gap-4">
          <h3 className=" w-2/3  text-lg font-bold text-center ">
            Rutas Por la montaña
          </h3>

          <div className="w-1/3 flex justify-center align-center gap-4">
            <button className="bg-color4 text-white rounded-lg p-2">
              guardar
            </button>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-2/3 ">
            <Image
              className="rounded-lg border border-contrast2 w-full h-auto object-cover"
              src={'/images/category/moto.jpg'}
              alt="test"
              width={1200}
              height={800}
            />
          </div>

          <div className=" flex flex-col w-1/3 justify-center align-center gap-4">
            <div className="mx-auto">
              <h4>Distancia</h4>
              <p>43,5 km</p>
            </div>

            <div className="mx-auto">
              <h4>Desnivel</h4>
              <p>1.500 m</p>
            </div>
          </div>
        </div>

        {/* Fila 2 */}
        <div className="flex gap-4 mt-4">
          <div className=" flex w-2/3 bg-color4 p-2 rounded-lg gap-2 justify-center align-center">
            <Image
              className="w-1/4 rounded-lg border border-contrast2  h-auto object-cover"
              src={'/images/profile/perfil.jpg'}
              alt="test"
              width={800}
              height={800}
            />
            <p className="w-3/4 text-center flex justify-center items-center">
              Llorensssss19
            </p>
          </div>
          <div className=" flex w-1/3 p-2 rounded-lg gap-2 justify-center align-center">
            <h3 className="text-lg flex justify-center items-center text-center">
              89 | 100
            </h3>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
};

export default CardRouteMobile;
