'use client';

import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useGetUserQuery } from '@/reactQuery/queries/user.query';
import SpinnerLoading from '@/components/spinners/SpinnerLoading';


const Test = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { data: user, isLoading } = useGetUserQuery();

  console.log('User:', user);

  useEffect(() => {
    if (user?.username) {
      router.push('/');
    }
  }, [user, router, isLoading]);

  if (isLoading) {
    return <SpinnerLoading />;
  }

  if (!user) {
    return <>{children}</>;
  }
};

export default Test;