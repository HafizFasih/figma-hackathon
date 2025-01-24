import React from "react";
import Card from "./Card";
import Link from "next/link";

const Products = ({ products }: { products: any }) => {
  return (
    <div className="w-full text-darkPrimary flex flex-col gap-4 my-16 mmd:px-20 px-5">
      <h2 className="xs:text-3xl text-2xl font-clash">Our popular products</h2>
      <div className="w-full flex sm:justify-center max-lg:overflow-x-scroll">
        <div className="flex xs:w-[1000px] w-[1100px] justify-center gap-5">
          {products
            .sort(() => Math.random() - 0.5)
            .slice(0, 4)
            .map(({ imageUrl, name, price, _id, category }: any, ind: any) => (
              <Link key={ind} href={`/products/${category}/${_id}`}>
                <Card image={imageUrl} name={name} price={price} />
              </Link>
            ))}
        </div>
      </div>
      <Link href="/products">
        <div className="w-full flex justify-center">
          <button className="bg-lightGray h-12 w-36 capitalize text-sm">
            view collection
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Products;
