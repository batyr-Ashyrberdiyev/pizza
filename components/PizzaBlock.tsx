"use client";

import React from "react";
import axios from "axios";

import { Pizza } from "./Pizza";
import { getPizzas, selectPizza } from "@/lib/slices/pizzaSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectFilter } from "@/lib/slices/filterSlice";

export const PizzaBlock = () => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector(selectPizza);
  const { sort, activeCat } = useAppSelector(selectFilter);

  React.useEffect(() => {
    const getCat = activeCat > 1 ? "cat=" + activeCat : "";
    const getSort = sort.rating ? "&sortBy=" + sort.rating : "";
    // const getPrice = sort.rating === "цена" && "&orderBy=price&order=asc";
    // const getAbc = sort.rating === "алфавит" && "&orderBy=asc&order=asc";

    console.log(getCat + getSort);

    dispatch(getPizzas({ getCat, getSort }));
  }, [activeCat, sort.rating]);

  return (
    <div>
      <h1 className="text-h1">Все пиццы</h1>
      <div className="pizza-block">
        {items.map((item) => (
          <Pizza {...item} />
        ))}
      </div>
    </div>
  );
};
