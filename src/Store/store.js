import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/myCounter";

const store = configureStore({
  reducer: {
    counterSlice,
  },
});

export default store;
