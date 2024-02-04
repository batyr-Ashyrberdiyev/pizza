"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectFilter, setSort, sortType } from "@/lib/slices/filterSlice";

export const sortList = [
  { rating: "popularity", name: "популярность" },
  { rating: "price", name: "цена" },
  { rating: "abc", name: "алфавит" },
];

export const Dropdown = () => {
  const dispatch = useAppDispatch();

  const { sort } = useAppSelector(selectFilter);

  const [toggle, setToggle] = React.useState<boolean>(false);

  const menuRef = React.useRef<HTMLUListElement>(null);

  React.useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setToggle(false);
      }
    };

    document.body.addEventListener("click", closeMenu);

    return () => document.body.removeEventListener("click", closeMenu);
  }, []);

  const clickSortName = (name: sortType) => {
    setToggle(false);
    dispatch(setSort(name));
  };

  return (
    <div className="relative">
      <p
        className={`cursor-pointer ${toggle && "cursor-default"}`}
        onClick={() => setToggle(!toggle)}
      >
        Фильтрация по:
        <span className="border-dashed border-orange border-b-2 text-orange">
          {" " + sort.name}
        </span>
      </p>
      {toggle && (
        <ul
          ref={menuRef}
          className="bg-slate-50 text-center flex flex-col absolute right-4 rounded-lg shadow-lg text-black"
        >
          {sortList.map((item) => (
            <li
              className={`cursor-pointer py-4 px-6 ${
                item.name === item.name &&
                "hover:bg-[#ffe7df] hover:text-orange"
              }`}
              onClick={() => {
                clickSortName(item);
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
