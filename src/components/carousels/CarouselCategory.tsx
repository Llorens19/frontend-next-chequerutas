'use client';

import {
  ICategories,
  ICategory,
} from '@/shared/interfaces/entities/category.interface';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CarouselCategory = ({ categories }: ICategories) => {
  const router = useRouter();
  const itemsPerSlide = 3;

  const [index, setIndex] = useState(0);
  const [startX, setStartX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const itemsStacked = () => {
    const stack = [];
    for (let i = 0; i < categories.length; i += itemsPerSlide) {
      stack.push(categories.slice(i, i + itemsPerSlide));
    }
    return stack;
  };

  const prev = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  const next = () => {
    if (index < itemsStacked().length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || startX === null) return;
    const touchX = e.touches[0].clientX;
    const deltaX = touchX - startX;

    if (deltaX > 50) {
      prev();
      setIsDragging(false);
    } else if (deltaX < -50) {
      next();
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setStartX(null);
    setIsDragging(false);
  };

  const handleCategoryClick = (category: ICategory) => {
    const filters = {
      category: category.idCategory,
    };
    const encodedFilters = btoa(JSON.stringify(filters));

    router.push(`/list-routes?filters=${encodedFilters}`);
  };

  return (
    <div
      className="carousel-container flex items-center justify-center relative"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >

      <button
        onClick={prev}
        disabled={index === 0}
        className={`hidden md:block absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full focus:outline-none z-10
          ${index === 0 ? 'bg-gray-800 bg-opacity-40 ' : 'bg-gray-800 hover:bg-gray-600 text-white'}
        `}
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <div className="carousel-wrapper overflow-hidden w-full mx-20">
        <div
          className="carousel flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {itemsStacked().map((stack, idx) => (
            <div
              key={idx}
              className="carousel-slide flex-shrink-0 w-full grid grid-cols-3 gap-4 p-4"
            >
              {stack.map((category: ICategory) => (
                <div
                  key={category.idCategory}
                  className="p-4 bg-color1 rounded-3xl text-center relative hover:scale-105 transition cursor-pointer"
                  style={{
                    backgroundImage: `url(/images/category/jpg/${category.imgCategory})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '40vh',
                  }}
                  onClick={() => handleCategoryClick(category)}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40 rounded-3xl flex flex-col justify-end p-4 hover:bg-opacity-60 transition">
                    <h3 className="text-4xl font-black text-white mb-8">
                      {category.nameCategory}
                    </h3>
                    <p className="text-white text-lg mb-4 bg-opacity-50 p-2 ">
                      {category.descCategory}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={next}
        disabled={index === itemsStacked().length - 1}
        className={`hidden md:block absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full focus:outline-none z-10
          ${index === itemsStacked().length - 1 ? 'bg-gray-800 bg-opacity-40 ' : 'bg-gray-800 hover:bg-gray-600 text-white'}
        `}
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default CarouselCategory;
