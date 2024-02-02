"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logo from "@/public/assets/icons/logo.svg";
import { useRouter } from "next/navigation";

interface HeaderProps {
  btn: boolean;
}

export const Header = ({ btn = false }: HeaderProps) => {
  const pathname = usePathname();

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

          <Button hrefLabel="/cart" text="1000 руб." />
        </div>
      </div>
    </header>
  );
};
