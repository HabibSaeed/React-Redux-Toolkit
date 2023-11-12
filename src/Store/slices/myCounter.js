import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    addcounter: (state, action) => {
      state.count = ++state.count;
    },
  },
});

export const { addcounter } = counterSlice.actions;
export default counterSlice.reducer;
