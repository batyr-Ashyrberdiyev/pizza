"use client";

import React from "react";
import Image from "next/image";

import { useAppSelector } from "@/lib/hooks";
import { selectCart } from "@/lib/slices/cartSlice";

export const CartBlock = () => {
  const { items } = useAppSelector(selectCart);

  return (
    <div className="cart-container">
      <header className="flex justify-between items-center">
        <span>
          <Image src="/public/assets/icons/cart.svg" alt="cart" />
          <h1 className="text-h1">Корзина</h1>
        </span>
        <span>
          <Image src={""} alt="trash" />
        </span>
      </header>
    </div>
  );
};
