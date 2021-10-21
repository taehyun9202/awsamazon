import React from "react";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import {
  calculateDiscount,
  getProductImage,
  getProductPriceRange,
} from "../../store/actions/productAction";

const ProductGrid = ({ product }) => {
  const router = useRouter();
  getProductImage(product);
  return (
    <div className="shadow-xl w-72 h-80 rounded-lg mix-blend-saturation z-10 mx-auto overflow-hidden px-2 sm:px-4">
      <div
        onClick={() => router.push(`/product/${product.id}`)}
        className="relative w-60 h-60 mx-auto cursor-pointer"
      >
        <Image
          src={getProductImage(product)}
          layout="fill"
          alt={product.title}
        />
      </div>
      <p className="text-lg font-semibold">{product.title}</p>
      {!product.discount ? (
        <p>{getProductPriceRange(product)}</p>
      ) : (
        <div className="flex justify-between items-baseline">
          <p>{calculateDiscount(product)}</p>
          <p className="text-xs text-red-500 line-through ">
            {getProductPriceRange(product)}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
