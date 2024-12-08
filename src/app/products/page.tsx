import Image from "next/image";
import React from "react";
import productList from "../data";
import Card from "@/components/Card";
import { MdArrowDropDown } from "react-icons/md";

const page = () => {
  return (
    <div className="w-full pb-10">
      <Heading />
      <Bar />
      <div className="w-full flex flex-wrap gap-10 items-center justify-center pt-10">
        {productList.map(({ image, name, price, size }, ind) => (
          <Card key={ind} image={image} name={name} price={price} size={size} />
        ))}
      </div>
      <div className="w-full flex justify-center">
        <button className="bg-lightGray h-12 w-36 capitalize text-sm">
          view collection
        </button>
      </div>
    </div>
  );
};

export default page;

const Heading = () => {
  return (
    <div className="relative w-full h-48 bg-black">
      <Image src="/head.jpeg" alt="" fill={true} className="object-cover" />
      <h1 className="absolute left-10 bottom-5 text-3xl text-white font-clash">
        All products
      </h1>
    </div>
  );
};

const Bar = () => {
  return (
    <div className="w-full py-4 flex justify-between items-center px-10">
      <ul className="flex gap-5">
        {["category", "product type", "price", "brand"].map((val, ind) => (
          <li
            key={ind}
            className="flex items-center capitalize text-darkPrimary"
          >
            <h3>{val}</h3>
            <MdArrowDropDown className="h-4 w-4" />
          </li>
        ))}
      </ul>
      <span className="flex gap-7">
        <h2>Sorted by:</h2>
        <span className="flex items-center">
          <h2>Date added</h2>
          <MdArrowDropDown />
        </span>
      </span>
    </div>
  );
};
