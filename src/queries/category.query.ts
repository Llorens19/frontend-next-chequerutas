import { useQuery } from '@tanstack/react-query';

export const useCategoryQuery = () =>
  useQuery({
    queryKey: ['category'],
    staleTime: 20000,
  });
