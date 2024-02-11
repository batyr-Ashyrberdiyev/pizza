"use client";

import React from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectCart, addItem } from "@/lib/slices/cartSlice";
import Link from "next/link";

export interface PizzaProps {
  id: string;
  name: string;
  img: string;
  price: number;
  type: string[];
  size: string[];
  count?: number;
}

export const Pizza = ({ id, name, img, price, type, size }: PizzaProps) => {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector(selectCart);
  const [active, setActive] = React.useState<number>(0);
  const [typeId, setTypeId] = React.useState<number>(0);

  const onSize = (i: number) => {
    if (i) {
      setActive(i);
    }
  };

  const onType = (i: number) => {
    if (i) {
      setTypeId(i);
    }
  };

  return (
    <div className="flex flex-col gap-x-[20px] items-center justify-center text-center">
      <header className="mb-[20px] text-grey">
        <Link href="/pizza">
          <Image
            src={img}
            alt="pizza"
            width={250}
            height={250}
            className="cursor-pointer"
          />
        </Link>
        <h2 className="text-h2 font-bold">{name}</h2>
      </header>

      <div className="flex flex-col gap-y-3 rounded-xl items-center mb-[20px] text-[14px] py-[15px] px-[15px] justify-center bg-[#F3F3F3]">
        <span className="flex gap-x-4">
          {size.map((item, id: number) => (
            <div
              key={id + 1}
              onClick={() => onSize(id + 1)}
              className={`${
                active === id + 1 && "bg-white"
              } flex rounded-xl cursor-pointer py-[8px] px-[14px]`}
            >
              {item}
            </div>
          ))}
        </span>
        <span className="flex gap-x-2">
          {type.map((type, id: number) => (
            <div
              key={id + 1}
              onClick={() => setTypeId(id + 1)}
              className={`${typeId === id + 1 && "bg-white"}
              flex rounded-xl py-[8px] px-[14px] cursor-pointer`}
            >
              {type}
            </div>
          ))}
        </span>
      </div>

      <footer className="flex justify-between items-center font-bold gap-x-2">
        <h2 className="text-[22px]">от {price}руб.</h2>
        <button
          onClick={() => addItem(id)}
          className="btn bg-transparent font-bold text-black hover:bg-orange border-orange border-[1px]"
        >
          Добавить
        </button>
      </footer>
    </div>
  );
};
