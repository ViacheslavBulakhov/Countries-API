import { configureStore } from "@reduxjs/toolkit";
import { counterSliceReducer } from "./countrySlice";

export const store = configureStore({
  reducer: {
    countries: counterSliceReducer,
  },
});
