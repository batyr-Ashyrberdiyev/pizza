import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import { Categories } from "@/components/Categories";
import { Dropdown } from "@/components/Dropdown";
import { PizzaBlock } from "@/components/blocks/PizzaBlock";

const Home = () => {
  return (
    <section className="rounded-md">
      <div className="inner-container p-[40px]">
        <header className="flex justify-between items-start flex-col gap-y-8 lg:flex-row lg:items-center text-black">
          <Categories />
          <Dropdown />
        </header>
        <div>
          <PizzaBlock />
        </div>
      </div>
    </section>
  );
};

export default Home;
