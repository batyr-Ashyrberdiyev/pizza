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
      {/*  */}
      <header className="mb-[20px] text-grey">
        <Image src={img} alt="pizza" width={250} height={250} />
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
        <Button border text={"Добавить"} />
      </footer>
      {/*  */}
    </div>
  );
};
