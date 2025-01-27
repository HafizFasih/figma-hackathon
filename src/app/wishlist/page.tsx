/* eslint-disable */
"use client";
import React, { useContext } from "react";
import WishlistContext from "../context/WishlistCreation";
import Image from "next/image";

interface Items {
  name: string;
  image: string;
  description: string;
}

const page = () => {
  const { items, removeItem } = useContext(WishlistContext)!;
  const removeFromWishlist = (id: string) => {
    removeItem(id)
  }
  return (
    <div className="min-h-screen w-full mmd:px-20 px-5 py-5">
      <h1 className="sm:text-3xl text-2xl text-darkPrimary my-5 capitalize font-clash">
        your wishlist
      </h1>
      {items.map(({ name, image, description, _id }, ind) => (
        <div key={ind} className="flex items-center justify-between">
          <Item name={name} description={description} image={image} />
          <button onClick={() => removeFromWishlist(_id)} className="h-10 px-4 bg-darkPrimary text-white capitalize">
            remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default page;

const Item = ({ name, description, image}: Items) => {
  return (
    <span className="w-full h-full flex relative my-1">
      <span className="h-20 w-28 relative flex bg-darkPrimary mr-2">
        <Image src={image} alt="" fill={true} className="object-cover" />
      </span>
      <span className="w-full flex py-2 flex-col max-sm:ml-2">
        <h2 className="sm:text-lg text-nr capitalize">{name}</h2>
        <p className="sm:text-sm text-xs w-4/5">{description}</p>
      </span>
    </span>
  );
};
