import { createSlice } from "@reduxjs/toolkit";
import { fetchCountries } from "./operation";

const initialState = {
  items: [],
  filters: {
    select: null,
    search: "",
  },
};

export const counterSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    onSearch(state, { payload }) {
      return { ...state, filters: { ...state.filters, search: payload } };
    },
    onSelect(state, { payload }) {
      return { ...state, filters: { ...state.filters, select: payload } };
    },
  },
  extraReducers: (builder) => {
    //fetchAll
    builder.addCase(fetchCountries.fulfilled, (state, { payload }) => {
      state.items = [...payload];
    });
  },
});

export const { onSearch, onSelect } = counterSlice.actions;

export const counterSliceReducer = counterSlice.reducer;
