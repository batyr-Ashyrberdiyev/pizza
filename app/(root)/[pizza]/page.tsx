import React from "react";
import Image from "next/image";
import Link from "next/link";

import { PizzaProps } from "@/components/Pizza";
import { Button } from "@/components/Button";

const PizzaInfo = (params: PizzaProps) => {
  const { name, price, img, ...other } = params;

  return (
    <div className="inner-container text-black">
      <div className="flex flex-col items-center justify-center md:flex-row">
        <div>
          <Image src={img} alt="pizza" width={300} height={300} />
        </div>
        <h1 className="">{name}</h1>
        <h1>{price}</h1>
        <Link href="/">
          <button className="btn bg-grey">Вернуться назад</button>
        </Link>
      </div>
    </div>
  );
};

export default PizzaInfo;
