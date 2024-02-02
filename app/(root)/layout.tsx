import { Header } from "@/components/Header";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-lightOrange w-full h-full leading-6">
      <div className="external-container h-full">
        <Header btn />
        {children}
      </div>
    </div>
  );
};

export default layout;
