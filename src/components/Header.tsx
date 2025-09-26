import * as React from "react";
import { Button } from "@/components/ui/Button";

const Header: React.FC = () => {
  return (
    <header className="bg-[rgba(8,8,8,0.9)] absolute z-10 flex w-[1280px] max-w-full items-center gap-[40px_100px] justify-between flex-wrap -translate-x-2/4 translate-y-[0%] px-8 py-4 rounded-[30px] left-2/4 top-[60px] max-md:px-5">
      <img
        src="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/a0d7ae3d5919fc0bdac4bea8de350a83e737593e?placeholderIfAbsent=true"
        alt="VonTech Group Logo"
        className="aspect-[4.55] object-contain w-[100px] self-stretch shrink-0 my-auto"
      />
      <nav className="self-stretch flex min-w-60 items-center gap-9 flex-wrap my-auto max-md:max-w-full">
        <a href="#" className="text-white text-xl font-medium self-stretch my-auto hover:text-[#FFE21B] transition-colors">
          Home
        </a>
        <a href="#" className="text-white text-xl font-medium self-stretch my-auto hover:text-[#FFE21B] transition-colors">
          About
        </a>
        <a href="#" className="text-white text-xl font-medium self-stretch my-auto hover:text-[#FFE21B] transition-colors">
          Services
        </a>
        <div className="self-stretch flex items-center gap-[5px] my-auto">
          <a href="#" className="text-white text-xl font-medium self-stretch my-auto hover:text-[#FFE21B] transition-colors">
            Resources
          </a>
          <div className="self-stretch flex flex-col overflow-hidden items-center justify-center w-[26px] my-auto pt-1">
            <img
              src="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/48475e67641946927977a9513afd0a67c8d15233?placeholderIfAbsent=true"
              alt="Dropdown arrow"
              className="aspect-[1] object-contain w-6"
            />
          </div>
        </div>
        <a href="#" className="text-white text-xl font-medium self-stretch my-auto hover:text-[#FFE21B] transition-colors">
          Career
        </a>
        <a href="#" className="text-white text-xl font-medium self-stretch my-auto hover:text-[#FFE21B] transition-colors">
          Events
        </a>
      </nav>
      <Button className="self-stretch my-auto">
        Login
      </Button>
    </header>
  );
};

export default Header;
