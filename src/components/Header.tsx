"use client"
import React, { useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import MobileNavbar from "./MobileNavbar";
import Link from "next/link";
import CartContext from "@/app/context/CartCreation";

const Header = () => {
  const {products} = useContext(CartContext)!;
  return (
    <>
      <header className="relative h-14 w-full sm:px-10 px-5 flex items-center justify-between border-b border-text/40">
        <IoIosSearch className="h-5 w-5 max-sm:hidden" />
        <Link href="/">
          <h1 className="capitalize text-2xl font-clash">avion</h1>
        </Link>
        <span className="flex gap-4 items-center">
          {[IoIosSearch, IoCartOutline, FaRegUserCircle].map((Icon, ind) => (
            <span key={ind} className="relative">
              <Link href={`${ind === 1 ? "/cart" : "/"}`}>
                <Icon
                  className={`${ind === 0 ? "sm:hidden" : "max-xs:hidden"} h-5 w-5 `}
                />
                {ind === 1 && (
                  <h3 className="h-4 w-4 flex items-center justify-center rounded-full bg-red-500 text-white absolute text-[10px] top-0 -translate-y-1/2 translate-x-1/2 right-0">
                    {products.length}
                  </h3>
                )}
              </Link>
            </span>
          ))}
          <MobileNavbar />
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
          "plant pots",
          "ceramics",
          "tables",
          "chairs",
          "crockery",
          "tableware",
          "cutlery",
        ].map((val, ind) => (
          <Link href={`/products/${ind == 0 ? "plant-pots" : val}`}>
          <li key={ind} className="capitalize text-text cursor-pointer">
            {val}
          </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};
