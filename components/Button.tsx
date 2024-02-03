"use client";

import Link from "next/link";
import React from "react";

interface ButtonProps {
  text: string;
  hrefLabel?: string;
  cartBtn?: boolean;
  border?: boolean;
}

export const Button = ({ hrefLabel, text, border = false }: ButtonProps) => {
  return hrefLabel ? (
    <Link href={hrefLabel}>
      <button className="btn">{text}</button>
    </Link>
  ) : (
    <button
      className={`btn ${
        border &&
        "bg-transparent border-solid border-2 text-orange border-orange hover:bg-orange hover:text-white transition-all duration-300"
      }`}
    >
      {text}
    </button>
  );
};
