"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./Button";

export interface PizzaProps {
  name: string;
  img: string;
  price: string;
  type: string[];
  size: string[];
}

export const Pizza = ({ name, img, price, type, size }: PizzaProps) => {
  return (
    <div className="flex flex-col gap-x-[20px] items-center justify-center text-center">
      {/*  */}
      <header className="mb-[20px] text-grey">
        <Image src={img} alt="pizza" width={250} height={250} />
        <h2 className="text-h2 font-bold">{name}</h2>
      </header>

      <div className="flex flex-col gap-y-3 rounded-xl items-center text-[14px] py-[15px] px-[25px] justify-center bg-[#F3F3F3]">
        <span className="flex gap-x-10">
          {size.map((item) => (
            <div className="flex cursor-pointer">{item}</div>
          ))}
        </span>
        <span className="flex gap-x-8">
          {type.map((type) => (
            <div className="flex">{type}</div>
          ))}
        </span>
      </div>

      <footer className="flex justify-between items-center">
        <h2 className="">от {price}руб.</h2>
        <Button border text={"Добавить"} />
      </footer>
      {/*  */}
    </div>
  );
};
