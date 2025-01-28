'use client';

import { ICategories } from '@/interfaces/entities/category.interface';
import CardCategory from '../cards/CardCategory';
import { useState } from 'react';
import { useRoutesQuery } from '@/queries/routes.query';

const CarouselCategory = ({ categories }: ICategories) => {


  const {data: user} = useRoutesQuery();

  console.log(user);





  const [index, setIndex] = useState<number>(0);
  const [startX, setStartX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const categories_stacked = () => {
    const stack = [];
    for (let i = 0; i < categories.length; i += 3) {
      stack.push(categories.slice(i, i + 3));
    }
    return stack;
  };

  const prev = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  const next = () => {
    if (index < categories_stacked().length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
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

  return (
    <div
      className="carousel-container flex items-center justify-center relative"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >

      <button
        onClick={prev}
        className="hidden md:block absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full shadow-lg focus:outline-none z-10 bg-color3 hover:bg-color4"
      >
        <svg
          className="w-6 h-6 text-text1"
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

      <button
        onClick={next}
        className="hidden md:block absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full shadow-lg focus:outline-none z-10 bg-color3 hover:bg-color4"
      >
        <svg
          className="w-6 h-6 text-text1"
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

      <div className="carousel-wrapper overflow-hidden">
        <div
          className="carousel flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {categories_stacked().map((stack, idx) => (
            <div
              key={idx}
              className="carousel-slide flex-shrink-0 w-full grid grid-cols-3 gap-4"
            >
              {stack.map((category) => (
                <CardCategory key={category.idCategory} category={category} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselCategory;
