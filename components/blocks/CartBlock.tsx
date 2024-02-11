"use client";

import React from "react";
import Image from "next/image";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectCart } from "@/lib/slices/cartSlice";
import { clearCart } from "@/lib/slices/cartSlice";

import { Status } from "../Status";
import { CartPizza } from "../CartPizza";

import trash from "@/public/assets/icons/trash.svg";
import cart from "@/public/assets/icons/cart.svg";

export const CartBlock = () => {
  const { cartItems } = useAppSelector(selectCart);
  const dispatch = useAppDispatch();

  console.log(cartItems);

  return cartItems.length !== 0 ? (
    <div className="inner-container py-[90px]">
      <div className="cart-container text-grey">
        <header className="flex justify-between items-center mb-8">
          <span className="flex items-center gap-x-2">
            <Image src={cart} alt="cart" width={29} height={29} />
            <h1 className="text-h1">Корзина</h1>
          </span>
          <span
            onClick={() => dispatch(clearCart())}
            className="flex gap-x-2 cursor-pointer"
          >
            <Image src={trash} alt="trash" />
            <p className="text-lightGrey">Очистить корзину</p>
          </span>
        </header>

        <div>
          {cartItems.map((item, id) => (
            <CartPizza key={id} {...item} />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <Status title={"Корзина пустая 😥"} />
  );
};
