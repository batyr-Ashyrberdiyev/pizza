"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import debounce from "lodash.debounce";

import logo from "@/public/assets/icons/logo.svg";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setSearch } from "@/lib/slices/filterSlice";
import { selectCart } from "@/lib/slices/cartSlice";

interface HeaderProps {
  btn: boolean;
}

export const Header = ({ btn = false }: HeaderProps) => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const { cartItems, sum } = useAppSelector(selectCart);
  const [value, setValue] = React.useState("");

  const changeInput = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearch(str));
    }, 400),
    []
  );

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    changeInput(e.target.value);
  };

  const isMounted = React.useRef(false);
  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(cartItems);
      localStorage.setItem("cart", json);
    }
    isMounted.current = true;
  }, [cartItems]);

  return (
    <header className="text-black font-bold border-b">
      <div className="inner-container py-8">
        <div className="flex items-center justify-between">
          <Link
            href={pathname === "/" ? "" : "/"}
            className={`${pathname !== "/" ? "cursor-pointer" : "cursor-auto"}`}
          >
            <div className="flex items-center">
              <Image
                src={logo}
                alt="logo"
                width={38}
                height={10}
                className="mr-4"
              />
              <div className="flex flex-col justify-start">
                <h1 className="text-logo text-grey">NEXT PIZZA</h1>
                <p className="text-categories text-lightGrey font-normal">
                  Самая вкусная пицца
                </p>
              </div>
            </div>
          </Link>

          {pathname === "/" && (
            <input
              type="text"
              value={value}
              onChange={updateValue}
              placeholder="Поиск..."
              className="px-8 border-lightGrey border-[1px] rounded-xl py-2 focus:outline-none"
            />
          )}

          <Button
            hrefLabel="/cart"
            text="1000 руб."
            length={cartItems.length}
            price={sum}
          />
        </div>
      </div>
    </header>
  );
};
