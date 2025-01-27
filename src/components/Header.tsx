/* eslint-disable */
"use client";
import React, { useContext, useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import MobileNavbar from "./MobileNavbar";
import Link from "next/link";
import CartContext from "@/app/context/CartCreation";
import { GoHeart } from "react-icons/go";
import { RiContactsBook3Line } from "react-icons/ri";
import { IoMdArrowDropleft } from "react-icons/io";
import SearchList from "./SearchList";
import { client } from "@/sanity/lib/sanityClient";

interface ListItem {
  name: string;
  category: string;
  imageUrl: string;
  _id: string;
}

const Icons = [
  {
    Icon: IoIosSearch,
    link: "",
  },
  {
    Icon: IoCartOutline,
    link: "/cart",
  },
  {
    Icon: GoHeart,
    link: "/wishlist",
  },
  {
    Icon: RiContactsBook3Line,
    link: "/contact",
  },
];

const Header = () => {
  const { products } = useContext(CartContext)!;
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [list, setList] = useState<ListItem[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [filteredList, setFilteredList] = useState<ListItem[]>([]);

  useEffect(() => {
    (async () => {
      const data = await client.fetch(
        `*[_type == "product"]{category, name, _id,"imageUrl": image.asset->url}`
      );
      setList(data);
    })();
  }, []);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    setFilteredList(
      list.filter(({ name }) =>
        name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };
  return (
    <>
      <header className="relative h-14 w-full sm:px-10 px-5 flex items-center justify-between border-b border-text/40">
        <span className="relative flex items-center">
          <SearchList list={filteredList} isSearch={openSearch} setSearch={setOpenSearch} />
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={handleSearch}
            className={`border-t border-b border-l border-black px-2 duration-300 focus:outline-none h-7 ${openSearch ? "w-40 opacity-100" : "w-0 opacity-0"}`}
          />
          <span
            onClick={() => setOpenSearch(true)}
            className={`h-7 flex items-center justify-center w-8 ${openSearch && "border-t border-b border-r border-black"}`}
          >
            <IoIosSearch className="h-5 w-5 max-sm:hidden cursor-pointer" />
          </span>
          <IoMdArrowDropleft
            onClick={() => setOpenSearch(false)}
            className={`${openSearch ? "inline-block" : "hidden"} cursor-pointer duration-300`}
          />
        </span>
        <Link href="/">
          <h1 className="capitalize text-2xl font-clash">avion</h1>
        </Link>
        <span className="flex gap-4 items-center">
          {Icons.map(({ Icon, link }, ind) => (
            <span key={ind} className="relative">
              <Link href={link}>
                <Icon
                  className={`${ind === 0 ? "sm:hidden" : "max-xs:hidden"} h-5 w-5 `}
                />
                {ind === 1 && products.length > 0 && (
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
