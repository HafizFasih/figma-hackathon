/* eslint-disable */
"use client";
import Button from "@/components/Button";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import CartContext from "../context/CartCreation";
import { RxCrossCircled } from "react-icons/rx";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full mmd:px-20 px-5 py-5">
      <h1 className="sm:text-3xl text-2xl text-darkPrimary my-10 capitalize font-clash">
        your shopping cart
      </h1>
      <GridCart />
      <SideDetails />
    </div>
  );
};

export default page;

const GridCart = () => {
  const { products } = useContext(CartContext)!;
  const [adjusment, setAdjusment] = useState({ rows: "1fr", height: 0 });
  useEffect(() => {
    let rows: string = "1fr";
    for (let i = 0; i < products.length; i++) {
      rows += " 2fr";
    }
    setAdjusment({ height: products.length * 140, rows });
  }, []);
  return (
    <div
      className={`w-full grid gap-y-4 xxs:grid-cols-[2fr_1fr_1fr] grid-cols-1 text-darkPrimary my-10`}
      style={{
        gridTemplateRows: adjusment.rows,
        height: `${70 + adjusment.height}px`,
      }}
    >
      {["product", "quantity", "total"].map((val, ind) => (
        <h2
          key={ind}
          className={`capitalize max-xxs:hidden ${ind !== 0 && "text-end"}`}
        >
          {val}
        </h2>
      ))}
      {products.map(({ name, imageUrl, description, price, quantity, _id, category }) => (
        <>
          <Item
            description={description.split(" ").slice(0, 8).join(" ") + "."}
            image={imageUrl}
            name={name}
            price={price}
            id={_id}
            category={category}
            quantity={quantity}
          />
          <h2 className="max-xxs:hidden text-end max-sm:text-sm">{quantity}</h2>
          <h2 className="max-xxs:hidden text-end max-sm:text-sm">
            £{price * quantity}
          </h2>
        </>
      ))}
    </div>
  );
};

interface Item {
  id: string;
  name: string;
  image: string;
  price: string;
  description: string;
  category: string;
  quantity: number;
}

const Item = ({ name, image, description, price, id, category, quantity }: Item) => {
  const { removeProduct } = useContext(CartContext)!;
  const deleteProduct = () => {
    removeProduct(id);
  };
  return (
    <span className="sm:w-72 xxs:w-60 w-full h-full flex relative">
      <span className="h-full w-2/5 relative flex bg-darkPrimary mr-1">
        <Image src={image} alt="" fill={true} className="object-cover" />
        <RxCrossCircled
          onClick={deleteProduct}
          className="top-0 left-0 text-red-500 bg-white z-10 relative -translate-x-1/2 -translate-y-1/2 h-5 w-5 cursor-pointer hover:bg-red-500 hover:text-white rounded-full"
        />
      </span>
      <span className="w-3/5 flex justify-between py-2 flex-col max-sm:ml-2">
        <Link href={`/products/${category}/${id}`}>
          <h2 className="sm:text-lg text-nr capitalize">{name}</h2>
        </Link>
        <p className="sm:text-sm text-xs">{description}</p>
        <h3 className="max-sm:text-sm">£{price}</h3>
      </span>
      <h3 className="xxs:hidden absolute bottom-[6px] text-sm right-2">{quantity}</h3>
    </span>
  );
};

const SideDetails = () => {
  const { products } = useContext(CartContext)!;

  return (
    <div className="flex text-primary flex-col gap-4 items-end">
      <span className="flex gap-2 font-clash items-center">
        <h2>Subtotal</h2>
        <h2 className="text-darkPrimary text-lg">
          £
          {products.reduce(
            (acc, val: any) => acc + val.price * val.quantity,
            0
          )}
        </h2>
      </span>
      <p className="max-sm:text-sm max-xxs:text-xs">
        Taxes and shipping are calculated at checkout
      </p>
      <span className="xxs:w-36 w-full flex justify-end">
        <Link href="/checkout">
        <Button text="Go to checkout" theme="dark" />
        </Link>
      </span>
    </div>
  );
};
