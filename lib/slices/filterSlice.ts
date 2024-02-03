import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type categType = {
  title: string;
  id: number;
};

interface FitlerTypes {
  activeCat: number;
  categories: categType[];
}

const initialState: FitlerTypes = {
  activeCat: 1,
  categories: [
    { title: "Все", id: 1 },
    { title: "Мясные", id: 2 },
    { title: "Веганские", id: 3 },
    { title: "Гриль", id: 4 },
    { title: "Острые", id: 5 },
    { title: "Закрытые", id: 6 },
  ],
  // categories: ["Все", "Мясные", "Веганские", "Гриль", "Острые", "Закрытые"],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setActiveCat(state, action: PayloadAction<number>) {
      state.activeCat = action.payload;
    },
  },
});

export const selectFilter = (state: RootState) => state.filterSlice;

export const { setActiveCat } = filterSlice.actions;

export default filterSlice.reducer;
