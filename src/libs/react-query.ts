import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, //5 minutos
      gcTime: 1000 * 60 * 10, //10 minutos
      retry: 1, //reintentos en caso de error
    },
  },
});

export default queryClient;