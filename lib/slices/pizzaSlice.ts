import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { PizzaProps } from "@/components/Pizza";
import { RootState } from "../store";

export const getPizzas = createAsyncThunk<PizzaProps[]>(
  "pizza/getPizzas",
  async () => {
    const { data } = await axios.get<PizzaProps[]>(
      `https://65bbb73652189914b5bced76.mockapi.io/pizzas`
    );

    return data;
  }
);

interface PizzaTypes {
  items: PizzaProps[];
  status: "pending" | "success" | "error";
}

const initialState: PizzaTypes = {
  items: [],
  status: "pending",
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPizzas.pending, (state) => {
      state.status = "pending";
    });

    builder.addCase(getPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "success";
    });

    builder.addCase(getPizzas.rejected, (state) => {
      state.status = "error";
    });
  },
});

export const selectPizza = (state: RootState) => state.pizzaSlice;

export default pizzaSlice.reducer;
