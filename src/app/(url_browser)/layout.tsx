'use client';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Navbar from '@/compontesPhone/layout/Navbar';
import useKeyboardStatus from '@/hooks/useKeyboardStatus';
import useMobile from '@/hooks/useMobile.hook';
import queryClient from '@/libs/react-query';
import ThemeSwitcher from '@/providers/them/themProvider';
import { QueryClientProvider } from '@tanstack/react-query';
import Head from 'next/head';

import { ReactNode } from 'react';

const RootLayout = ({ children }: { children: ReactNode }) => {
  const isMobile = useMobile();
  const isKeyboardOpen = useKeyboardStatus();
  return (
    <>
      <html lang="es">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <ThemeSwitcher>
          <body
            suppressHydrationWarning={true}
            className="bg-color1 min-h-screen w-full"
          >
            <QueryClientProvider client={queryClient}>
              {isMobile ? (
                <div className="flex flex-col min-h-screen w-full">
                  <div className="flex-grow">{children}</div>
                  {!isKeyboardOpen && <Navbar />}
                </div>
              ) : (
                <div className="flex flex-col min-h-screen w-full">
                  <Header />
                  <div className="flex-grow">{children}</div>
                  <Footer />
                </div>
              )}
            </QueryClientProvider>
          </body>
        </ThemeSwitcher>
      </html>
    </>
  );
};

export default RootLayout;
