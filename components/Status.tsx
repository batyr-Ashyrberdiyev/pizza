import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Status = () => {
  return (
    <div className="flex flex-col gap-y-2 items-center justify-center mx-auto">
      <h1 className="text-h1">{}dsa</h1>
      <p>{}</p>
      <Image src={""} alt="Image" />
      <Link href={"/"}>
        <button className="btn bg-grey">Вернуться назад</button>
      </Link>
    </div>
  );
};
