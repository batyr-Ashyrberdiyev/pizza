import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type categType = {
  title: string;
  id: number;
};

export type sortType = {
  rating: string;
  name: string;
};

interface FitlerTypes {
  activeCat: number;
  categories: categType[];
  sort: sortType;
}

const initialState: FitlerTypes = {
  activeCat: 1,
  sort: { rating: "popularity", name: "популярность" },

  categories: [
    { title: "Все", id: 1 },
    { title: "Мясные", id: 2 },
    { title: "Веганские", id: 3 },
    { title: "Гриль", id: 4 },
    { title: "Острые", id: 5 },
    { title: "Закрытые", id: 6 },
  ],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setActiveCat(state, action: PayloadAction<number>) {
      state.activeCat = action.payload;
    },
    setSort(state, action: PayloadAction<sortType>) {
      state.sort = action.payload;
    },
  },
});

export const selectFilter = (state: RootState) => state.filterSlice;

export const { setActiveCat, setSort } = filterSlice.actions;

export default filterSlice.reducer;
