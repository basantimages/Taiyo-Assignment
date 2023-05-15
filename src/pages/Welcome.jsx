// ! Welcome dummy page

import { Typography } from '@mui/material';
import BoxUI from '../components/UI/BoxUI';

const Welcome = () => {
  return (
    <BoxUI>
      <Typography variant='h3' color='inherit'>
        Assignment done by
      </Typography>
      <Typography variant='h6' color='inherit'>
        Basantraj Shakti ©
      </Typography>
      <Typography variant='p' color='inherit'>
        {/* Visit My portfolio Link to connect with me  */}
        Portfolio Link : <a href='https://basant-portfolio.web.app/'>Link</a>
      </Typography>
    </BoxUI>
  );
};

export default Welcome;
