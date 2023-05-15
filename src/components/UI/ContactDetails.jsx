import { useDispatch } from 'react-redux';
import { TableCell, TableRow, Button } from '@mui/material';
import { modalActions } from '../store/modal-slice';
import { contactActions } from '../store/contact-slice';

const ContactDetails = (props) => {
  const dispatch = useDispatch();

  // !Function to edit Contacts
  function editHandler() {
    // Calling dispatch to update contact
    dispatch(
      contactActions.contactToBeEditedHandler({
        id: props.id,
        fName: props.fName,
        lName: props.lName,
        isActive: props.isActive,
      }),
    );
    // calling dispatch to show form
    dispatch(modalActions.formShowHandler());
  }

  // function to handle deleting contacts
  function deleteHandler() {
    dispatch(contactActions.removeContact(props.id));
  }

  return (
    <TableRow>
      <TableCell>{props.fName}</TableCell>
      <TableCell>{props.lName}</TableCell>
      <TableCell>{props.isActive}</TableCell>
      <TableCell
        sx={{
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <Button variant='outlined' color='success' size='small' onClick={editHandler}>
          Edit
        </Button>
        <Button variant='outlined' color='error' size='small' onClick={deleteHandler}>
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default ContactDetails;
