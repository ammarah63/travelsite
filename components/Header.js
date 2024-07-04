import Image from "next/image";
import logo from "../public/assets/logo.svg";
import { useState } from "react";

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
     setIsOpen(!isOpen);
   };
  return (
    <>
      <div className="pt-3 lg:py-6 px-5 lg:px-10 flex items-center justify-between relative">
        <div>
          <Image
            src={logo}
            width={100}
            height={100}
            className="mt-1 3xl:w-32 4xl:w-36"
          />
        </div>
        <div className="lg:hidden mr-4">
          {/* Hamburger icon */}
          <button
            className="block text-gray-500  focus:outline-none"
            onClick={toggleMenu}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                className={`${isOpen ? "hidden" : "block"}`}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"
              />
              <path
                className={`${isOpen ? "block" : "hidden"}`}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:hidden mt-2 absolute bg-[#f1a501] bg-opacity-95 py-5 top-full left-0 right-0`}
        >
          <div className="flex flex-col text-lg space-y-8 items-center">
            <p className="cursor-pointer">Destinations</p>
            <p className="cursor-pointer">Hotel</p>
            <p className="cursor-pointer">Flights</p>
            <p className="cursor-pointer">Bookings</p>
            <p className="cursor-pointer">Logins</p>
            <p className="border border-black rounded-md px-5 py-1 mx-2 cursor-pointer">
              Sign Up
            </p>
            <p className="cursor-pointer">EN</p>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="flex space-x-9 3xl:space-x-16 4xl:space-x-20 items-center 4xl:text-3xl text-base 3xl:text-2xl pe-5 3xl:pe-10">
            <p>Destinations</p>
            <p>Hotel</p>
            <p>Flights</p>
            <p>Bookings</p>
            <p>Logins</p>
            <p className="border border-black rounded-md px-5 py-1 mx-2">
              Sign Up
            </p>
            <p>EN</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
