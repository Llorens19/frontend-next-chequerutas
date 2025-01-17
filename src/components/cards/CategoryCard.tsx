'use client';
import React from 'react';

type SportCardProps = {
    data: {
        img_sport: string;
        n_sport: string;
    };
};

const CategoryCard: React.FC<SportCardProps> = ({ data }) => {
    const { img_sport, n_sport } = data;

    const handleCardClick = () => {
        const filters = { sport: n_sport };
        const filters_btoa = btoa(JSON.stringify(filters));
    };

    return (
        <div
            className="relative group cursor-pointer"
            onClick={handleCardClick}
        >
            <img
                src={`img/sports/${img_sport}`}
                alt="Imagen del deporte"
                className="w-full h-auto rounded-lg shadow-lg"
            />
            <div
                className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg"
            >
                <h3 className="text-xl font-bold text-white">{n_sport}</h3>
                <p className="text-gray-300 mt-2">Explora actividades relacionadas</p>
            </div>
        </div>
    );
};

export default CategoryCard;