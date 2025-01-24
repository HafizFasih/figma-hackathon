/* eslint-disable */
"use client";
import { useState } from "react";
import Amount from "./Amount";
import Dimensions from "./Dimensions";

const DetailsSection = ({ id, product }: { id: string; product: any }) => {
  const [amount, setAmount] = useState<number>(1);
  console.log(product);
  return (
    <section className="flex flex-col md:w-1/2 w-full text-text2 sm:gap-5 gap-3 mmd:px-14 px-5 py-5">
      <h1 className="sm:text-4xl text-2xl text-darkPrimary font-clash">
        {product.name}
      </h1>
      <h3 className="sm:text-xl text-lg text-black">
        {product.price * amount}
      </h3>
      <span className="sm:mt-4">
        <h3 className="text-darkPrimary font-clash">Description</h3>
        <p className="max-sm:text-sm">{product.description}</p>
        <ul className="list-disc ml-5 mt-2">
          {product.features &&
            product.features.map((val: string, ind: number) => (
              <li key={ind} className="max-sm:text-sm">
                {val}
              </li>
            ))}
        </ul>
      </span>
      <Dimensions dimensions={product.dimensions} />
      <Amount id={id} amount={amount} setAmount={setAmount} product={product} />
    </section>
  );
};
export default DetailsSection;
