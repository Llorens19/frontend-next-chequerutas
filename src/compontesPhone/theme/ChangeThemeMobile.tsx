'use client';

import { useEffect, useState } from 'react';

const themes = ['green', 'dark', 'retro', 'blue'];

const ChangeThemeMobile = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.body.classList.remove(...themes);
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
      <select
        value={theme}
        onChange={(e) => {
          setTheme(e.target.value);
          e.target.blur();
        }}
        className="w-full text-text1 text-xl text-center font-bold bg-color1 border-l border-text1"
      >
        <option value="green">Verde</option>
        <option value="blue">Azul</option>
        <option value="dark">Oscuro</option>
        <option value="retro">Retro</option>
      </select>
  );
};

export default ChangeThemeMobile;
