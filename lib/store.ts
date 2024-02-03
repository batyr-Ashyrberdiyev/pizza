import { configureStore } from "@reduxjs/toolkit";

import filterSlice from "./slices/filterSlice";
import pizzaSlice from "./slices/pizzaSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { filterSlice, pizzaSlice },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
