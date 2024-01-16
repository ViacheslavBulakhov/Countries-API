import { configureStore } from "@reduxjs/toolkit";
import { counterSliceReducer } from "./CountrySlice";

export const store = configureStore({
  reducer: {
    countries: counterSliceReducer,
  },
});
