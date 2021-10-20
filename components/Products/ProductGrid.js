import React from "react";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";

const ProductGrid = ({ product }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/product/${product.id}`)}
      className="shadow-xl w-72 h-80 rounded-lg mix-blend-saturation z-10 mx-auto overflow-hidden px-2 sm:px-4"
    >
      <div className="relative w-60 h-60 mx-auto cursor-pointer">
        <Image src={product.image} layout="fill" alt={product.title} />
      </div>
      <p className="text-lg font-semibold">{product.title}</p>
      <p>
        {typeof product.price === "object"
          ? `$${product.price[0]} - $${product.price[1]}`
          : product.price}
      </p>
    </div>
  );
};

export default ProductGrid;
