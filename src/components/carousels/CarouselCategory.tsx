'use client';
import React, { useState } from 'react';

const CarouselCategory = ({}) => {
  const sports = [
    { id_sport: 1, name: 'Fútbol' },
    { id_sport: 2, name: 'Baloncesto' },
    { id_sport: 3, name: 'Tenis' },
    { id_sport: 4, name: 'Voleibol' },
    { id_sport: 5, name: 'Atletismo' },
    { id_sport: 6, name: 'Natación' },
    { id_sport: 7, name: 'Ciclismo' },
    { id_sport: 8, name: 'Gimnasia' },
    { id_sport: 9, name: 'Boxeo' },
    { id_sport: 10, name: 'Karate' },
    { id_sport: 11, name: 'Judo' },
    { id_sport: 12, name: 'Taekwondo' },
    { id_sport: 13, name: 'Esgrima' },
    { id_sport: 14, name: 'Pentatlón' },
    { id_sport: 15, name: 'Tiro con arco' },
    { id_sport: 16, name: 'Tiro olímpico' },
    { id_sport: 17, name: 'Remo' },
    { id_sport: 18, name: 'Canotaje' },
    { id_sport: 19, name: 'Vela' },
    { id_sport: 20, name: 'Halterofilia' },
    { id_sport: 21, name: 'Lucha' },
    { id_sport: 22, name: 'Triatlón' },
    { id_sport: 23, name: 'Patinaje' },
    { id_sport: 24, name: 'Bádminton' },
    { id_sport: 25, name: 'Golf' },
    { id_sport: 26, name: 'Rugby' },
    { id_sport: 27, name: 'Hockey' },
    { id_sport: 28, name: 'Béisbol' },
    { id_sport: 29, name: 'Softbol' },
    { id_sport: 30, name: 'Ajedrez' },
  ];

  const [current_index, setCurrentIndex] = useState(0);

  const sportArray = () => {
    const chunks = [];
    for (let i = 0; i < sports.length; i += 3) {
      chunks.push(sports.slice(i, i + 3));
    }
    return chunks;
  };

  const prev = () => {
    if (current_index > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const next = () => {
    if (current_index < sportArray().length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="sport-carousel p-4">
      <h2 className="flex justify-center text-2xl font-bold text-deep-orange-600 mb-4">
        Deportes
      </h2>
      <div className="carousel-container flex items-center justify-center relative">

      <button
        onClick={prev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2  p-2 rounded-full shadow-lg focus:outline-none z-10 bg-color3 hover:bg-color4"
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
          className="absolute top-1/2 right-4 transform -translate-y-1/2  p-2 rounded-full shadow-lg focus:outline-none z-10 bg-color3 hover:bg-color4"
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

        <div className="carousel-wrapper overflow-hidden ">
          <div
            className="carousel flex transition-transform duration-500 ease-in-out "
            style={{ transform: `translateX(-${current_index * 100}%)` }}
          >
            {sportArray().map((chunk, index) => (
              <div
                key={index}
                className="carousel-slide flex-shrink-0 w-full grid grid-cols-3 gap-4"
              >
                {chunk.map((sport) => (
                  <div
                    key={sport.id_sport}
                    className="bg-white shadow-md rounded-lg p-4 text-center"
                  >
                    <h3>{sport.name}</h3>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default CarouselCategory;
