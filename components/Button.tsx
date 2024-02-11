"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PizzaProps } from "./Pizza";
import cart from "@/public/assets/icons/cart.svg";

interface ButtonProps {
  text: string;
  hrefLabel?: string;
  cartBtn?: boolean;
  border?: boolean;
  pizza?: PizzaProps;
  price?: number;
  length?: number;
}

export const Button = ({
  hrefLabel,
  text,
  border = false,
  price,
}: ButtonProps) => {
  return hrefLabel ? (
    <Link href={hrefLabel}>
      <button className="btn flex items-center">
        <Image src={cart} alt="cart" width={20} height={20} className="mr-2" />
        {length + " |  " + price + " руб."}
      </button>
    </Link>
  ) : (
    <button
      className={`btn ${
        border &&
        "bg-transparent border-solid border-[1px] text-orange border-orange hover:bg-orange hover:text-white transition-all duration-300"
      }`}
    >
      {text}
    </button>
  );
};
