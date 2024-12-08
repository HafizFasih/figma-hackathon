import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const ProductPage = () => {
  return (
    <div className="w-full flex">
      <ImageSection />
      <DetailsSection />
    </div>
  );
};

export default ProductPage;

const ImageSection = () => {
  return (
    <section className="relative mim-h-[450px] w-1/2">
      <Image src="/chair1.png" alt="" fill={true} className="object-cover" />
    </section>
  );
};

const DetailsSection = () => {
  return (
    <section className="flex flex-col w-1/2 text-text2 gap-5 px-14 py-5">
      <h1 className="text-4xl text-darkPrimary font-clash">The Dandy Chair</h1>
      <h3 className="text-xl text-black">£250</h3>
      <span className="mt-4">
        <h3 className="text-darkPrimary font-clash">Description</h3>
        <p>
          A timeless design, with premium materials features as one of our most
          popular and iconic pieces. The dandy chair is perfect for any stylish
          living space with beech legs and lambskin leather upholstery.
        </p>
        <ul className="list-disc ml-5">
          {[
            "Premium material",
            "Handmade upholstery",
            "Quality timeless classic",
          ].map((val, ind) => (
            <li key={ind}>{val}</li>
          ))}
        </ul>
      </span>
      <Dimensions />
      <Amount />
    </section>
  );
};

const Dimensions = () => {
  return (
    <span className="flex flex-col gap-2 mt-5">
      <h3 className="text-darkPrimary capitalize font-clash">dimensions</h3>
      <span className="h-20 w-60 grid grid-cols-3 grid-rows-2">
        {["height", "width", "depth", "110cm", "75cm", "50cm"].map(
          (val, ind) => (
            <span key={ind} className="h-full w-full flex items-center">
              <h3
                className={`capitalize ${
                  ind > 2 ? "text-text2" : "text-darkPrimary font-clash"
                }`}
              >
                {val}
              </h3>
            </span>
          )
        )}
      </span>
    </span>
  );
};

const Amount = () => {
  return (
    <div className="w-full flex justify-between">
      <span className="flex items-center gap-4">
        <h3 className="text-lg capitalize text-darkPrimary font-clash">
          amount:
        </h3>
        <span className="flex w-28 h-12 bg-lightGray items-center justify-around">
          {["-", "1", "+"].map((val, ind) => (
            <span
              key={ind}
              className={`${
                val === "1" ? "text-darkPrimary" : "text-text2/50"
              }`}
            >
              {val}
            </span>
          ))}
        </span>
      </span>
      <Button text="add to cart" theme="dark" />
    </div>
  );
};
