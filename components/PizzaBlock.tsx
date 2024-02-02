"use client";

import React from "react";
import axios from "axios";

import { Pizza } from "./Pizza";
import { PizzaProps } from "./Pizza";

export const PizzaBlock = () => {
  const [items, setItems] = React.useState<PizzaProps[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://65bbb73652189914b5bced76.mockapi.io/pizzas"
        );
        setItems(data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-h1">Все пиццы</h1>
      <div className="grid grid-cols-4 gap-y-4 justify-start items-start text-grey">
        {items.map((item) => (
          <Pizza {...item} />
        ))}
      </div>
    </div>
  );
};
