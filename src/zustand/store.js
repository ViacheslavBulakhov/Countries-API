import axios from "axios";
import { create } from "zustand";
import { ALL_COUNTRIES } from "../config";
import { devtools } from "zustand/middleware";

export const useStore = create(
  devtools((set) => ({
    countries: [],
    setCountries: (data) =>
      set((state) => ({
        ...state,
        countries: [...data],
      })),
    increasePopulation: () =>
      set((state) => ({ bears: state.bears + 1 }), true),
    removeAllBears: () => set({ bears: 0 }),
  }))
);
