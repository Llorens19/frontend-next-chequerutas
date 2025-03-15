import { useMediaQuery } from '@mui/material';

const useMobile = () => {
  return useMediaQuery('(max-width: 1200px)');
};
export default useMobile;