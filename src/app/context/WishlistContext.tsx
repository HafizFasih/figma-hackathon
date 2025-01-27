/* eslint-disable */
"use client";
import React, { ReactNode, useState } from "react";
import WishlistContext from "./WishlistCreation";

const WishlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<any>([]);
  const addItem = (product: any) => {
    setItems((item: any) => [...item, product]);
    return "Product has been added!";
  };
  const removeItem = (id: string) => {
    setItems(items.filter((product: any) => product._id !== id));
    return "Product has been removed!";
  };

  return (
    <WishlistContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
