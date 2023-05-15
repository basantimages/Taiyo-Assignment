// ! To show when no item present in contacts
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const NoItem = () => {
  return (
    <Box mt='5rem'>
      <Typography variant='body1' component='h6' textAlign='center'>
        Nothing to show !
      </Typography>
      <Typography variant='p' component='h6' textAlign='center'>
        Please add some contacts.
      </Typography>
    </Box>
  );
};

export default NoItem;
