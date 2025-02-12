'use client';
import { ReactNode, useEffect, useState } from 'react';


const ThemeSwitcher = ({ children }: { children: ReactNode })=> {

  const theme = localStorage.getItem('theme') || 'light';

  useEffect(() => {
    document.body.classList.add(theme);
  }, []);

  return <>{children}</>;
};

export default ThemeSwitcher;
