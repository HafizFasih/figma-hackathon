"use client";
import Brand from "@/components/Brand";
import Ceramics from "@/components/Ceramics";
import Club from "@/components/Club";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Products from "@/components/Products";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/sanityClient";

const query = `*[_type == "product"]{
  category, name, slug, "imageUrl": image.asset->url, price, quantity, tags, description, features, dimensions, _id
}`;

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await client.fetch(query);
      setProducts(data);
    })();
  }, []);
  return (
    <main className="">
      <Hero />
      <Brand />
      <Ceramics products={products} />
      <Products products={products} />
      <Club />
      <Section
        direction={true}
        heading="From a studio in London to a global brand with over 400 outlets"
        image="/last.png"
      />
    </main>
  );
}
