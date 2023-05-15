// ! Common Box logic for all pages
import { Box, useMediaQuery } from '@mui/material';

const BoxUI = (props) => {
  const md = useMediaQuery('(min-width: 600px)');
  const ml = md ? '15rem' : 0;

  return (
    <Box mt={11} ml={ml} paddingX={'1.5rem'}>
      {props.children}
    </Box>
  );
};

export default BoxUI;
