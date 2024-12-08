import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="h-screen w-full px-20">
      <h1 className="text-3xl text-darkPrimary my-10 capitalize font-clash">
        your shopping cart
      </h1>
      <GridCart />
      <SideDetails/>
    </div>
  );
};

export default page;

interface Item {
  name: string;
  image: string;
  price: string;
  description: string;
}
const data = [
  {
    name: "Graystone vase",
    image: "/vase3.png",
    price: "£85",
    description: "A timeless ceramic vase with a tri color grey glaze.",
  },
  {
    name: "Basic white vase",
    image: "/plant.png",
    price: "£85",
    description: "Beautiful and simple this is one for the classics",
  },
];

const GridCart = () => {
  return (
    <div className="h-80 w-full grid gap-y-4 grid-cols-[2fr_1fr_1fr] grid-rows-[1fr_2fr_2fr] text-darkPrimary">
      {["product", "quantity", "total"].map((val, ind) => (
        <h2 key={ind} className={`capitalize ${ind !== 0 && "text-end"}`}>
          {val}
        </h2>
      ))}
      {data.map(({ name, image, description, price }) => (
        <>
          <Item
            description={description}
            image={image}
            name={name}
            price={price}
          />
          <h2 className="text-end">1</h2>
          <h2 className="text-end">£85</h2>
        </>
      ))}
    </div>
  );
};

const Item = ({ name, image, description, price }: Item) => {
  return (
    <span className="w-72 h-full flex">
      <span className="h-full w-2/5 relative flex">
        <Image
          src={image}
          alt=""
          fill={true}
          className="object-contain object-left"
        />
      </span>
      <span className="w-3/5 flex justify-between py-2 flex-col">
        <h2 className="text-lg capitalize">{name}</h2>
        <p className="text-sm">{description}</p>
        <h3>{price}</h3>
      </span>
    </span>
  );
};

const SideDetails = () => {
  return (
    <div className="flex text-primary flex-col gap-3 items-end">
      <span className="flex gap-2 font-clash items-center">
        <h2>Subtotal</h2>
        <h2 className="text-darkPrimary text-lg">£210</h2>
      </span>
      <p>Taxes and shipping are calculated at checkout</p>
      <span className="w-36 flex justify-end">
      <Button text="Go to checkout" theme="dark"/>
      </span>
    </div>
  );
};
