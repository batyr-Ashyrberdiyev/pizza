"use client";

import React from "react";
import { useAppDispatch, useAppSelector, useAppStore } from "@/lib/hooks";
import { selectFilter, setActiveCat } from "@/lib/slices/filterSlice";

export const Categories = ({}) => {
  const store = useAppStore();
  const dispatch = useAppDispatch();
  const { activeCat, categories } = useAppSelector(selectFilter);

  const onCateg = (idx: number) => {
    if (idx) dispatch(setActiveCat(idx));
  };

  return (
    <div className="flex gap-x-2">
      {categories.map((item) => (
        <div
          onClick={() => {
            onCateg(item.id);
          }}
          key={item.id}
          className={`category ${
            activeCat === item.id && "bg-zinc-800 text-white hover:bg-zinc-700"
          }`}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};
