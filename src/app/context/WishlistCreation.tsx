/* eslint-disable */
"use client";
import { createContext } from "react";

interface Items {
  _id: string;
  name: string;
  image: string;
  description: string;
}

interface Wishlist {
  items: Items[];
  addItem: (product: any) => void;
  removeItem: (id: string) => void;
}

const WishlistContext = createContext<Wishlist | undefined>(undefined);
export default WishlistContext;
