import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://restcountries.com/v3.1";
const fields = "?fields=name,capital,flags,population,region";

export const fetchCountries = createAsyncThunk(
  "countries/fetchAll",
  async () => {
    try {
      const { data } = await axios.get(`/all${fields}`);

      return data;
    } catch (error) {
      return error;
    }
  }
);
