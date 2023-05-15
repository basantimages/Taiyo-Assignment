import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import { Box, Typography, Card } from '@mui/material';

// ! Card layout for contacts page to manage and add contacts
const Cards = (props) => {
  return (
    <Card
      sx={{
        borderRadius: '20px',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        p: '1rem',
        height: props.h || 'auto',
        width: props.w || 'auto',
        position: 'relative',
      }}
    >
      <Typography variant='h6' color='grey' fontWeight='bold' mb={1}>
        {props.title}
      </Typography>
      <AddIcCallIcon
        sx={{
          border: '10px solid lime',
          borderRadius: '50%',
          color: 'lime',
          fontSize: '3rem',
          position: 'absolute',
          right: '1rem',
          top: '1rem',
        }}
      />
      <Box sx={{ width: '100%' }}>{props.children}</Box>
    </Card>
  );
};

export default Cards;
