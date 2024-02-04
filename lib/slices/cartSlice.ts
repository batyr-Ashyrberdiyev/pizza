import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface cartTypes {}

const initialState = {
  items: ["s", "s"],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export const selectCart = (state: RootState) => state.cartSlice;

export default cartSlice.reducer;
