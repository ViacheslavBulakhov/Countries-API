import axios from "axios";
import { create } from "zustand";
import { ALL_COUNTRIES } from "../config";
import { devtools } from "zustand/middleware";

export const useStore = create(
  devtools((set) => ({
    countries: [],
    filters: {
      search: "",
      region: null,
    },

    setCountries: async () => {
      const { data } = await axios.get(ALL_COUNTRIES);
      set((state) => ({
        ...state,
        countries: [...data],
      }));
    },

    setSearchFilter: (value) =>
      set((state) => ({
        ...state,
        filters: { ...state.filters, search: value },
      })),

    setRegionFilter: (value) =>
      set((state) => ({
        ...state,
        filters: { ...state.filters, region: value },
      })),
  }))
);
