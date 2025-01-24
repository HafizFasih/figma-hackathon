/* eslint-disable */

"use client";
import { useEffect, useState } from "react";
import DetailsSection from "./DetailSection";
import ImageSection from "./ImageSection";
import { client } from "@/sanity/lib/sanityClient";
import { urlFor } from "@/sanity/lib/image";

const ProductPage = ({ id }: { id: string }) => {
  const [product, setProduct] = useState<any>({});
  useEffect(() => {
    (async () => {
      const data = await client.getDocument(id);
      if (data)
        setProduct({
          name: data.name,
          slug: data.slug,
          price: data.price,
          imageUrl: data.image ? urlFor(data.image) : null,
          quantity: data.quantity,
          tags: data.tags,
          category: data.category,
          description: data.description,
          features: data.features,
          dimensions: data.dimensions,
          _id: data._id,
        });
    })();
  }, []);
  
  return (
    <div className="w-full flex max-md:flex-col">
      <ImageSection image={product.imageUrl} />
      <DetailsSection id={id} product={product} />
    </div>
  );
};

export default ProductPage;
