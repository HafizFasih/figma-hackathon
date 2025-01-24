/* eslint-disable */
"use client";
import Brand from "@/components/Brand";
import Ceramics from "@/components/Ceramics";
import Club from "@/components/Club";
import ProductPage from "@/components/ProductPage/ProductPage";
import { client } from "@/sanity/lib/sanityClient";
import { useEffect, useState } from "react";

const query = `*[_type == "product"]{
  category, name, slug, "imageUrl": image.asset->url, price, quantity, tags, description, features, dimensions, _id
}`;

const page = ({ params }: { params: { product: string } }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await client.fetch(query);
      setProducts(data);
    })();
  }, []);
  return (
    <div>
      <ProductPage id={params.product} />
      <Ceramics heading="You might also like" products={products} />
      <Brand />
      <Club />
    </div>
  );
};

export default page;
