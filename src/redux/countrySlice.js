import { createSlice } from "@reduxjs/toolkit";
import { fetchCountries } from "./operation";

const initialState = {
  items: [],
};

export const counterSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    //fetchAll
    builder.addCase(fetchCountries.fulfilled, (state, { payload }) => {
      state.items = [...payload];
    });
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const counterSliceReducer = counterSlice.reducer;
