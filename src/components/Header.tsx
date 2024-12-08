import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  return (
    <>
      <header className="relative h-14 w-full sm:px-10 px-5 flex items-center justify-between border-b border-text/40">
        <IoIosSearch className="h-5 w-5 max-sm:hidden" />
        <h1 className="capitalize text-2xl font-clash">avion</h1>
        <span className="flex gap-4 items-center">
          <IoIosSearch className="h-5 w-5 sm:hidden" />
          <IoCartOutline className="h-5 w-5" />
          <FaRegUserCircle className="h-5 w-5" />
          <MobileNavbar/>
        </span>
      </header>
      <LowerHeader />
    </>
  );
};

export default Header;

const LowerHeader = () => {
  return (
    <nav className="h-12 max-sm:hidden w-full flex items-center justify-center">
      <ul className="h-full flex items-center gap-8">
        {[
          "plan pots",
          "ceramics",
          "tables",
          "chairs",
          "crockery",
          "tableware",
          "cutlery",
        ].map((val, ind) => (
          <li key={ind} className="capitalize text-text">
            {val}
          </li>
        ))}
      </ul>
    </nav>
  );
};
