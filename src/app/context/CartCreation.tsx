"use client"
import { createContext } from "react";

interface Cart {
  products: any[];
  addProduct: (product: any) => void;
  removeProduct: (id: string) => void;
}

const CartContext = createContext<Cart | undefined>(undefined);
export default CartContext;