"use client";

import React from "react";
import axios from "axios";

import { Pizza, PizzaProps } from "./Pizza";
import { getPizzas, selectPizza } from "@/lib/slices/pizzaSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export const PizzaBlock = () => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector(selectPizza);

  React.useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const { data } = await axios.get(
    //       "https://65bbb73652189914b5bced76.mockapi.io/pizzas"
    //     );
    //     setItems(data);
    //   } catch (error) {
    //     alert(error);
    //     console.log(error);
    //   }
    // };

    dispatch(getPizzas());
  }, []);

  return (
    <div>
      <h1 className="text-h1">Все пиццы</h1>
      <div className="grid grid-cols-1 gap-y-4 justify-start items-start text-grey xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {items.map((item) => (
          <Pizza {...item} />
        ))}
      </div>
    </div>
  );
};
