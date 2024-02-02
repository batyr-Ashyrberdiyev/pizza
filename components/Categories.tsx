"use client";

import React from "react";

export const Categories = () => {
  const [categ, setCateg] = React.useState<string[]>([
    "Все",
    "Мясные",
    "Веганские",
    "Гриль",
    "Острые",
    "Закрытые",
  ]);

  return (
    <div className="flex gap-x-2 w-full">
      {categ.map((item, id: number) => (
        <div
          key={id}
          className="bg-lightGrey hover:bg-opacity-50 transition-all duration-300 cursor-pointer bg-opacity-30 rounded-full py-2 px-4 text-categories"
        >
          {item}
        </div>
      ))}
    </div>
  );
};
