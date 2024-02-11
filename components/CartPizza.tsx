import React from "react";
import Image from "next/image";

import { PizzaProps } from "./Pizza";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { selectCart } from "@/lib/slices/cartSlice";
import { removePizza } from "@/lib/slices/cartSlice";

import remove from "@/public/assets/icons/x-remove.svg";
import add from "@/public/assets/icons/add.svg";
import minus from "@/public/assets/icons/minus.svg";

export const CartPizza = ({ id, name, price, img, type, size }: PizzaProps) => {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector(selectCart);

  return (
    <div className="flex items-center justify-between py-[30px] border-t-[1px]">
      <div className="flex items-center">
        <Image src={img} alt="pizza" width={80} height={80} />
        <div>
          <h2 className="text-h2">{name}</h2>
          <p className="text-[18px] text-lightGrey">
            {size + "cм  " + "  " + type}
          </p>
        </div>
      </div>
      <span className="flex gap-x-4">
        <Image src={add} alt="+" className="cursor-pointer" />
        <b>{2}</b>
        <Image src={minus} alt="-" className="cursor-pointer" />
      </span>
      <b>{price} руб.</b>
      <Image
        onClick={() => {
          dispatch(removePizza(id));
        }}
        src={remove}
        alt="remove"
        className="cursor-pointer"
      />
    </div>
  );
};
