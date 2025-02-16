'use client';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import queryClient from '@/libs/react-query';
import ThemeSwitcher from '@/providers/them/themProvider';
import { QueryClientProvider } from '@tanstack/react-query';

import { ReactNode } from 'react';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <html lang="es">
        <ThemeSwitcher>
          <body suppressHydrationWarning={true} className="bg-color1">
            <QueryClientProvider client={queryClient}>
              <div className="flex flex-col min-h-screen">
                <Header />
                <div className="flex-grow">{children}</div>
                <Footer />
              </div>
            </QueryClientProvider>
          </body>
        </ThemeSwitcher>
      </html>
    </>
  );
};

export default RootLayout;
