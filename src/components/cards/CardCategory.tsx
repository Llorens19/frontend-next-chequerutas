import Image from 'next/image';
import { ICategory } from '@/interfaces/entities/category.interface';

const CardCategory = ({ category }: { category: ICategory }) => {
  return (
    <div className="relative group shadow-md rounded-lg text-center w-full h-auto overflow-hidden">
      <Image
        className="rounded-t-lg w-full h-auto object-cover"
        src={`/images/category/${category.imgCategory}`}
        alt={category.nameCategory}
        width={1200}
        height={800}
      />

      <h3 className="pb-4 text-base sm:text-lg font-bold text-text1 transition-opacity duration-500 group-hover:opacity-0 absolute inset-0 flex items-end justify-center bg-black bg-opacity-50 opacity-100">
        {category.nameCategory}
      </h3>

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">
          {category.nameCategory}
        </h3>
        <p className="text-xs sm:text-sm md:text-base text-white text-center px-4 sm:px-6">
          {category.descCategory}
        </p>
      </div>
    </div>
  );
};

export default CardCategory;
