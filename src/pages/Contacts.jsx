import {
  Typography,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Card,
} from '@mui/material';
import BoxUI from '../components/UI/BoxUI';
import Cards from '../components/UI/Cards';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '../components/store/modal-slice';
import ContactDetails from '../components/UI/ContactDetails';
import NoItem from '../components/UI/NoItem';

const Welcome = () => {
  const dispatch = useDispatch();

  // !Getting redux data for contacts
  const contactsArr = useSelector((state) => Object.values(state.contacts.contacts));
  const totalActive = useSelector((state) => state.contacts.totalActive);
  const totalInActive = useSelector((state) => state.contacts.totalInActive);

  //! Function to show contact form
  const addContactHandler = () => {
    dispatch(modalActions.formShowHandler());
  };

  return (
    <BoxUI>
      <Typography variant='h5' color='initial' fontWeight={'bold'} mb={3}>
        Contact section
      </Typography>

      {/* Card for contact management */}
      <Cards title='Add Contacts'>
        <Typography variant='body1' color='initial' fontSize={'0.8rem'}>
          Total Active : {totalActive}
        </Typography>
        <Typography variant='body1' color='initial' fontSize={'0.8rem'} mb={1}>
          Total Inactive : {totalInActive}
        </Typography>
        <Button
          variant='outlined'
          color='primary'
          startIcon={<AddCircleIcon />}
          onClick={addContactHandler}
        >
          Add New
        </Button>
      </Cards>

      {/* If no contacts present */}
      {contactsArr.length === 0 && <NoItem />}

      {/* If contacts present */}
      {contactsArr.length > 0 && (
        <Card
          sx={{
            borderRadius: '20px',
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
            p: '1rem',
            mt: '1.5rem',
          }}
        >
          <TableContainer>
            <Table>
              <TableHead sx={{ th: { fontWeight: 'bold' } }}>
                <TableRow>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>Edit / Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Mapping the table data for contacts */}
                {contactsArr.map((contact) => {
                  return (
                    <ContactDetails
                      id={contact.id}
                      key={contact.id}
                      fName={contact.fName}
                      lName={contact.lName}
                      isActive={contact.isActive}
                    />
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      )}
    </BoxUI>
  );
};

export default Welcome;
