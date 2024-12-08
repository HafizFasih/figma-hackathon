import Image from "next/image";
import React from "react";
interface CardType {
  image: string;
  size: "single" | "double";
  name: string;
  price: string;
}

const Card = ({ image, size, name, price }: CardType) => {
  return (
    <div className="text-darkPrimary flex flex-col gap-3">
      {size === "single" ? (
        <span className="h-72 xs:w-60 w-72 relative inline-block">
          <Image src={image} alt="" fill={true} className="object-cover" />
        </span>
      ) : (
        <span className="h-72 w-[480px] relative inline-block">
          <Image src={image} alt="" fill={true} className="object-cover" />
        </span>
      )}
      <span className="flex flex-col gap-2 mb-5 font-clash">
        <h2>{name}</h2>
        <p>{price}</p>
      </span>
    </div>
  );
};

export default Card;
