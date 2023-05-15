import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formShow: false,
  alertShow: false,
  popUpDetails: {
    message: '',
    severity: 'info',
  },
};

const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    formShowHandler(state) {
      state.formShow = !state.formShow;
    },
    alertShowHandler(state, actions) {
      state.alertShow = !state.alertShow;
      state.popUpDetails = {
        message: actions.payload.message,
        severity: actions.payload.severity,
      };
    },
  },
});

export default modalSlice.reducer;
export const modalActions = modalSlice.actions;
