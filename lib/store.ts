import { configureStore } from "@reduxjs/toolkit";

import filterSlice from "./slices/filterSlice";
import pizzaSlice from "./slices/pizzaSlice";
import cartSlice from "./slices/cartSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { filterSlice, pizzaSlice, cartSlice },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
