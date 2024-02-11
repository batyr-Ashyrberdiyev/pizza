"use client";

import React from "react";

import { Pizza } from "../Pizza";
import PizzaSkeleton from "../skeletons/PizzaSkeleton";

import { getPizzas, selectPizza } from "@/lib/slices/pizzaSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectFilter } from "@/lib/slices/filterSlice";

export const PizzaBlock = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector(selectPizza);
  const { sort, activeCat, search } = useAppSelector(selectFilter);

  React.useEffect(() => {
    const getCat = activeCat > 1 ? "cat=" + activeCat : "";
    const getSort = sort.rating ? "&sortBy=" + sort.rating : "";
    // const getPrice = sort.rating === "цена" && "&orderBy=price&order=asc";
    // const getAbc = sort.rating === "алфавит" && "&orderBy=asc&order=asc";

    console.log(getCat + getSort);

    dispatch(getPizzas({ getCat, getSort }));
  }, [activeCat, sort.rating]);

  const filtering = items.filter((pizza) =>
    pizza.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-h1">Все пиццы</h1>
      <div className="pizza-block">
        {status === "pending"
          ? [...Array(4)].map((_, id) => <PizzaSkeleton key={id} />)
          : filtering.map((item) => <Pizza {...item} key={item.id} />)}
      </div>
    </div>
  );
};
