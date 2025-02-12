'use client';

import { useEffect, useState } from 'react';

const themes = ['green', 'dark', 'retro', 'blue'];

const ChangeTheme = () => {
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
        className="text-white bg-header outline-none appearance-none px-4"
      >
        <option value="green">Verde</option>
        <option value="blue">Azul</option>
        <option value="dark">Oscuro</option>
        <option value="retro">Retro</option>
      </select>
  );
};

export default ChangeTheme;
