import React from "react";
import Image from "next/image";
import Link from "next/link";
import statusImg from "@/public/assets/icons/empty-icon.svg";

export const Status = ({ title }: { title: string }) => {
  return (
    <div className="inner-container py-[60px] flex flex-col gap-y-2 items-center justify-center mx-auto text-grey">
      <h1 className="text-h1 mb-2">{title}</h1>
      <p className="w-[50%] mb-6 text-lightGrey text-center">
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
        пиццу, перейди на главную страницу.
      </p>
      <Image src={statusImg} alt="Image" width={300} height={255} />
      <Link href={"/"}>
        <button className="btn bg-grey">Вернуться назад</button>
      </Link>
    </div>
  );
};
