// ! Simple spinner component to lazy load other components
import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import BoxUI from './BoxUI';

const Spinner = () => {
  return (
    <BoxUI>
      <Box
        width={'100%'}
        height={'100%'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <CircularProgress />
      </Box>
    </BoxUI>
  );
};

export default Spinner;
