import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allCases: {},
  mapData: [],
};

const coronaCases = createSlice({
  name: 'coronaCases',
  initialState,
  reducers: {
    dataFeedHandler(state, actions) {
      state.mapData = actions.payload[0];
      state.allCases = actions.payload[1];
    },
  },
});

export default coronaCases.reducer;
export const coronaCasesActions = coronaCases.actions;
