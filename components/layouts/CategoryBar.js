import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setModalOpen } from "../../store/actions/utilAction";

const CategoryBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-category  text-white">
      <div className="max-w-7xl mx-auto flex justify-between h-10 items-center px-2 sm:px-4 gap-1">
        <p
          onClick={() => dispatch(setModalOpen("menu", true))}
          className="flex justify-center items-center text-sm font-semibold gap-1 cursor-pointer h-7 p-1 ring-1 ring-transparent rounded-sm hover:ring-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          All
        </p>
        <div className="flex-1 flex gap-1 2xl:gap-2">
          <Link href="/customerservice">
            <a className="flex max-w-max items-center text-sm font-semibold cursor-pointer px-2 h-6 ring-1 ring-transparent border-transparent rounded-sm hover:ring-white">
              Customer Service
            </a>
          </Link>
          <Link href="/sell">
            <a className="flex max-w-max items-center text-sm font-semibold cursor-pointer px-2 h-6 ring-1 ring-transparent border-transparent rounded-sm hover:ring-white">
              Sell
            </a>
          </Link>
          <p className="flex max-w-max items-center text-sm font-semibold cursor-pointer px-2 h-6 ring-1 ring-transparent border-transparent rounded-sm hover:ring-white">
            Buy Again
          </p>
          <p className="flex max-w-max items-center text-sm font-semibold cursor-pointer px-2 h-6 ring-1 ring-transparent border-transparent rounded-sm hover:ring-white">
            Electronics
          </p>
          {/* <p className="hidden lg:flex max-w-max items-center text-sm font-semibold cursor-pointer px-2 h-6 ring-1 ring-transparent border-transparent rounded-sm hover:ring-white">
          Shopper ToolKit
        </p>
        <p className="hidden lg:flex max-w-max items-center text-sm font-semibold cursor-pointer px-2 h-6 ring-1 ring-transparent border-transparent rounded-sm hover:ring-white">
          Registry
        </p>
        <p className="hidden lg:flex max-w-max items-center text-sm font-semibold cursor-pointer px-2 h-6 ring-1 ring-transparent border-transparent rounded-sm hover:ring-white">
          Amazon Prime
        </p>
        <p className="hidden xl:flex max-w-max items-center text-sm font-semibold cursor-pointer px-2 h-6 ring-1 ring-transparent border-transparent rounded-sm hover:ring-white">
          Gift Cards
        </p>
        <p className="hidden xl:flex max-w-max items-center text-sm font-semibold cursor-pointer px-2 h-6 ring-1 ring-transparent border-transparent rounded-sm hover:ring-white">
          Coupons
        </p>
        <p className="hidden xl:flex max-w-max items-center text-sm font-semibold cursor-pointer px-2 h-6 ring-1 ring-transparent border-transparent rounded-sm hover:ring-white">
          Amazon Basics
        </p> */}
        </div>
        <p className="hidden md:flex items-center text-sm font-bold cursor-pointer px-2 h-6 ring-1 ring-transparent border-transparent rounded-sm hover:ring-white">
          Shop epic deals on Top Brands
        </p>
      </div>
    </div>
  );
};

export default CategoryBar;
