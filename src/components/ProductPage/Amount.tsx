/* eslint-disable */
"use client";
import CartContext from "@/app/context/CartCreation";
import Button from "../Button";
import { useContext, useEffect, useState } from "react";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import WishlistContext from "@/app/context/WishlistCreation";

const Amount = ({
  id,
  amount,
  setAmount,
  product,
}: {
  id: string;
  amount: number;
  product: any;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { addProduct, products, removeProduct } = useContext(CartContext)!;
  const { addItem, removeItem, items } = useContext(WishlistContext)!;
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [isFilledHeart, setIsFilledHeart] = useState<boolean>(false);
  useEffect(() => {
    setIsAdded(products.some((val: any) => val._id === id));
    setIsFilledHeart(items.some((val: any) => val._id === id));
  }, []);

  const addToCart = () => {
    if (!isAdded) {
      product.quantity = amount;
      addProduct(product);
      setIsAdded(true);
    } else {
      removeProduct(id);
      setIsAdded(false);
    }
  };

  const addToWishlist = () => {
    setIsFilledHeart((val) => !val);
    !isFilledHeart
      ? addItem({
          name: product.name,
          _id: product._id,
          description: product.description,
          image: product.imageUrl,
        })
      : removeItem(id);
  };
  return (
    <div className="w-full flex justify-between">
      <span className="flex items-center gap-4">
        <h3 className="capitalize text-darkPrimary font-clash">amount:</h3>
        <span className="flex sm:w-28 w-20 sm:h-12 h-8 bg-lightGray items-center justify-around">
          {["-", amount, "+"].map((val, ind) => (
            <span
              key={ind}
              onClick={() => {
                ind !== 1 &&
                  setAmount(
                    val === "-" ? (amount > 1 ? amount - 1 : 1) : amount + 1
                  );
              }}
              className={`${ind === 1 ? "text-darkPrimary" : "text-text2/50 cursor-pointer hover:scale-110 duration-300"}`}
            >
              {val}
            </span>
          ))}
        </span>
      </span>
      <span className="flex items-center justify-center gap-4 cursor-pointer">
        <span
          onClick={addToWishlist}
          className="bg-darkPrimary h-10 w-10 flex items-center justify-center text-white"
        >
          {isFilledHeart ? (
            <GoHeartFill className="h-6 w-6" />
          ) : (
            <GoHeart className="h-6 w-6" />
          )}
        </span>
        <span onClick={addToCart}>
          <Button text={!isAdded ? "Add to cart" : "Remove"} theme="dark" />
        </span>
      </span>
    </div>
  );
};
export default Amount;
