import { useSelector, useDispatch } from 'react-redux';
import { Snackbar, Alert } from '@mui/material';
import { modalActions } from '../store/modal-slice';

const PopUpAlert = () => {
  //! Getting alert details
  const showPopUpAlert = useSelector((state) => state.modals.alertShow);
  const popUpDetails = useSelector((state) => state.modals.popUpDetails);
  const dispatch = useDispatch();

  //! function to hide the alert popup
  function onCloseHandler() {
    const obj = {
      message: '',
      severity: 'success',
    };
    // Resetting the alert
    dispatch(modalActions.alertShowHandler(obj));
  }

  return (
    <>
      {/* Will be shown on fetch request */}
      <Snackbar
        open={showPopUpAlert}
        autoHideDuration={1500}
        onClose={onCloseHandler}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={onCloseHandler}
          severity={popUpDetails.severity}
          variant='filled'
          sx={{ width: '100%' }}
        >
          {popUpDetails.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default PopUpAlert;
