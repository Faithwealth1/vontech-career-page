import * as React from "react";
import { Button } from "@/components/ui/Button";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[rgba(8,8,8,0.9)] absolute z-10 flex w-[1280px] max-w-full items-center gap-[40px_100px] justify-between flex-wrap -translate-x-2/4 translate-y-[0%] px-8 py-4 rounded-[30px] left-2/4 top-[40px] max-md:px-5">
      <img
        src="Vontech-Logo 1.png"
        alt="VonTech Group Logo"
        className="aspect-[4.55] object-contain w-[100px] self-stretch shrink-0 my-auto"
      />
      
      {/* Desktop Navigation */}
      <nav className="self-stretch hidden md:flex min-w-60 items-center gap-9 flex-wrap my-auto max-md:max-w-full">
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
              src="drop down.svg"
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
      
      {/* Desktop Login Button */}
      <Button className="self-stretch my-auto hidden md:block">
        Login
      </Button>

      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMobileMenu}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
        aria-label="Toggle mobile menu"
      >
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[rgba(8,8,8,0.95)] backdrop-blur-sm rounded-b-[20px] mt-2 p-6 md:hidden animate-fade-in">
          <nav className="flex flex-col gap-6">
            <a href="#" className="text-white text-lg font-medium hover:text-[#FFE21B] transition-colors border-b border-gray-700 pb-3">
              Home
            </a>
            <a href="#" className="text-white text-lg font-medium hover:text-[#FFE21B] transition-colors border-b border-gray-700 pb-3">
              About
            </a>
            <a href="#" className="text-white text-lg font-medium hover:text-[#FFE21B] transition-colors border-b border-gray-700 pb-3">
              Services
            </a>
            <a href="#" className="text-white text-lg font-medium hover:text-[#FFE21B] transition-colors border-b border-gray-700 pb-3">
              Resources
            </a>
            <a href="#" className="text-white text-lg font-medium hover:text-[#FFE21B] transition-colors border-b border-gray-700 pb-3">
              Career
            </a>
            <a href="#" className="text-white text-lg font-medium hover:text-[#FFE21B] transition-colors border-b border-gray-700 pb-3">
              Events
            </a>
            <Button className="mt-4 w-full">
              Login
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
