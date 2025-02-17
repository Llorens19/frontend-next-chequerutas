'use client';

import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useGetUserQuery } from '@/reactQuery/queries/user.query';
import SpinnerLoading from '@/components/spinners/SpinnerLoading';


const IsNotPremium = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { data: user, isLoading } = useGetUserQuery();

  useEffect(() => {
    if (user?.premiumLevel && user?.premiumLevel > 0) {
      router.push('/');
    }
  }, [user, router, isLoading]);

  if (isLoading) return <SpinnerLoading />;


  return <>{children}</>;
};

export default IsNotPremium;