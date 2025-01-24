/* eslint-disable */
"use client";
import React, { useContext } from "react";
import Card from "./Card";
import Link from "next/link";

const Ceramics = ({
  heading,
  products,
}: {
  heading?: string;
  products: any;
}) => {
  return (
    <div className="w-full text-darkPrimary flex flex-col gap-6 my-16 mmd:px-10 px-5">
      <h2 className="xs:text-3xl text-2xl font-clash">
        {heading ? heading : "New ceramics"}
      </h2>
      <div className="flex w-full justify-center gap-5 flex-wrap">
        {products
          .sort(() => Math.random() - 0.5)
          .slice(0, 4)
          .map(({ name, price, imageUrl, _id, category }: any, ind: any) => (
            <Link key={ind} href={`/products/${category}/${_id}`}>
              <Card image={imageUrl} name={name} price={price} />
            </Link>
          ))}
      </div>
      <div className="w-full flex justify-center">
        <Link href="/products">
          <button className="bg-lightGray h-12 w-36 capitalize text-sm">
            view collection
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Ceramics;
