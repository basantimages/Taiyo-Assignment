import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import Typography from '@mui/material/Typography';
import {
  Box,
  Dialog,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import { modalActions } from '../store/modal-slice';
import { contactActions } from '../store/contact-slice';

const initialFormData = {
  fName: '',
  lName: '',
  isActive: '',
};

const ContactForm = () => {
  const showAddContactForm = useSelector((state) => state.modals.formShow);
  const contactToBeEdited = useSelector((state) => state.contacts.contactToBeEdited);
  const [formData, setFormData] = useState(initialFormData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (contactToBeEdited.id) {
      setFormData(contactToBeEdited);
    }
  }, [contactToBeEdited]);

  const formText = contactToBeEdited.id ? 'Update Contact' : 'Add Contact';

  function changeHandler(e) {
    const obj = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(obj);
  }

  function submitHandler(e) {
    e.preventDefault();

    const temp = {
      ...formData,
      id: contactToBeEdited.id || Math.random().toString().slice(-6),
    };

    if (contactToBeEdited.id) {
      dispatch(contactActions.editContact(temp));
    } else {
      dispatch(contactActions.addContact(temp));
    }
    setFormData(initialFormData);
    dispatch(contactActions.contactToBeEditedHandler({}));
    dispatch(modalActions.formShowHandler());
  }

  function onCloseHandler() {
    setFormData(initialFormData);
    dispatch(modalActions.formShowHandler());
  }

  return (
    <Dialog
      open={showAddContactForm}
      onClose={onCloseHandler}
      maxWidth='xs'
      PaperProps={{
        style: {
          borderRadius: '20px',
        },
      }}
    >
      <DialogTitle>
        <Typography
          variant='h4'
          component='p'
          color='initial'
          fontWeight='bold'
          textAlign='center'
          mb='1.2rem'
        >
          {formText}
        </Typography>
      </DialogTitle>
      <Box component='form' onSubmit={submitHandler} mb='1.5rem'>
        <Grid container spacing={3} alignItems='center' justifyContent='center'>
          <Grid item xs={11}>
            <TextField
              name='fName'
              id='fName'
              label='First Name'
              value={formData.fName}
              onChange={changeHandler}
              type='text'
              required
              fullWidth
              size='small'
            />
          </Grid>
          <Grid item xs={11}>
            <TextField
              name='lName'
              id='lName'
              label='Last Name'
              value={formData.lName}
              onChange={changeHandler}
              type='text'
              fullWidth
              size='small'
            />
          </Grid>
          <Grid item xs={11}>
            <FormControl sx={{ width: '100%', mt: '0.8rem' }} required>
              <FormLabel id='demo-row-radio-buttons-group-label'>Status</FormLabel>
              <RadioGroup
                row
                aria-labelledby='demo-row-radio-buttons-group-label'
                color='secondary'
                name='isActive'
                value={formData.isActive}
                onChange={changeHandler}
              >
                <FormControlLabel
                  required
                  value={true}
                  control={<Radio color='secondary' size='small' />}
                  label='Active'
                />
                <FormControlLabel
                  value={false}
                  control={<Radio color='secondary' size='small' />}
                  label='InActive'
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={11} display='flex' justifyContent='center'>
            <Button
              type='submit'
              variant='contained'
              color='success'
              size='large'
              sx={{ bgcolor: '#002333', p: '0.5rem 1.5rem' }}
            >
              {formText}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
};

export default ContactForm;
