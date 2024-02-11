import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { PizzaProps } from "@/components/Pizza";
import { getCartItemLS } from "@/utils/getCartItemsLS";

interface CartTypes {
  cartItems: PizzaProps[];
  sum: number;
}

const initialState: CartTypes = {
  cartItems: [],
  sum: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      if (state.cartItems.find((item) => item.id === action.payload.id)) {
        state.cartItems.filter((pizza) => pizza.id !== action.payload.id);
      } else {
        state.cartItems.push(...action.payload);
      }
    },
    setPrice(state) {
      state.cartItems.reduce((acc, item) => {
        return acc + item.price;
      }, 0);
    },
    removePizza(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    clearCart(state) {
      state.cartItems = [];
    },
  },
});

export const selectCart = (state: RootState) => state.cartSlice;

export const { addItem, removePizza, setPrice, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
