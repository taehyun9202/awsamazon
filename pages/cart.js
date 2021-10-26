import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

const Cart = () => {
  const cart = useSelector((state) => state.profile.cart);
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 grid grid-cols-10 gap-10">
        <div className="col-span-7 bg-white px-4 py-8">
          <div className="pb-4 border-b relative">
            <p className="text-3xl">
              {cart.length > 0 ? "Shopping Cart" : "Your Amazon Cart is empty"}
            </p>
            {cart.length > 0 && <p>Select all items</p>}
            <p className="absolute bottom-0 right-0">Price</p>
          </div>
          <div className="flex flex-col">
            {cart.map((item) => (
              <div className="p-4 border-b flex">
                <div className="relative w-40 h-40">
                  <Image
                    src={item.image}
                    alt={item.product.title}
                    layout="fill"
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold">{item.product.title}</p>
                  <div>
                    {item.selectedVariation &&
                      Object.keys(item.selectedVariation).map((variable) => (
                        <p className="text-sm">
                          <span className="font-semibold capitalize">
                            {variable}:
                          </span>{" "}
                          {item.selectedVariation[variable]}
                        </p>
                      ))}
                  </div>
                  <div className="flex gap-4 text-sm items-center">
                    <select
                      //   onChange={(e) => setQuantity(e.target.value)}
                      className="text-xs bg-gray-200 rounded-lg h-7 w-16 p-1 my-2"
                    >
                      <option value={1}>Qty: 1</option>
                      <option value={2}>Qty: 2</option>
                      <option value={3}>Qty: 3</option>
                      <option value={4}>Qty: 4</option>
                      <option value={5}>Qty: 5</option>
                    </select>
                    <p>Delete</p>
                    <p>Save for later</p>
                  </div>
                </div>
              </div>
            ))}
            <p className="text-right text-lg">
              Subtotal ({cart.length} items): {cart.length > 0 && "$100"}
            </p>
          </div>
        </div>
        <div className="col-span-3 bg-white">
          <p>Subtotal : $100</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
