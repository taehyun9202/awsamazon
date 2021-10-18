import React from "react";
import Link from "next/link";

const CategoryBar = () => {
  return (
    <div className="bg-category h-10 text-white flex justify-between items-center px-2 sm:px-4 gap-1">
      <p className="flex justify-center items-center text-sm font-semibold gap-1 cursor-pointer h-7 p-1 ring-1 ring-transparent rounded-sm hover:ring-white">
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
        <p className="max-w-max flex items-center text-sm font-semibold cursor-pointer px-2 h-6 ring-1 ring-transparent border-transparent rounded-sm hover:ring-white">
          Customer Service
        </p>
        <p className="max-w-max flex items-center text-sm font-semibold cursor-pointer px-2 h-6 ring-1 ring-transparent border-transparent rounded-sm hover:ring-white">
          Buy Again
        </p>
        <p className="max-w-max flex items-center text-sm font-semibold cursor-pointer px-2 h-6 ring-1 ring-transparent border-transparent rounded-sm hover:ring-white">
          Sports & Fitness
        </p>
        <p className="max-w-max flex items-center text-sm font-semibold cursor-pointer px-2 h-6 ring-1 ring-transparent border-transparent rounded-sm hover:ring-white">
          Shopper ToolKit
        </p>
        <p className="max-w-max flex items-center text-sm font-semibold cursor-pointer px-2 h-6 ring-1 ring-transparent border-transparent rounded-sm hover:ring-white">
          Registry
        </p>
        <p className="max-w-max flex items-center text-sm font-semibold cursor-pointer px-2 h-6 ring-1 ring-transparent border-transparent rounded-sm hover:ring-white">
          Amazon Prime
        </p>
        <Link href="/sell">
          <a className="max-w-max flex items-center text-sm font-semibold cursor-pointer px-2 h-6 ring-1 ring-transparent border-transparent rounded-sm hover:ring-white">
            Sell
          </a>
        </Link>
        <p className="max-w-max flex items-center text-sm font-semibold cursor-pointer px-2 h-6 ring-1 ring-transparent border-transparent rounded-sm hover:ring-white">
          Gift Cards
        </p>
        <p className="max-w-max flex items-center text-sm font-semibold cursor-pointer px-2 h-6 ring-1 ring-transparent border-transparent rounded-sm hover:ring-white">
          Coupons
        </p>
        <p className="max-w-max flex items-center text-sm font-semibold cursor-pointer px-2 h-6 ring-1 ring-transparent border-transparent rounded-sm hover:ring-white">
          Amazon Basics
        </p>
      </div>
      <p className="flex items-center text-sm font-bold cursor-pointer px-2 h-6 ring-1 ring-transparent border-transparent rounded-sm hover:ring-white">
        Shop epic deals on Top Brands
      </p>
    </div>
  );
};

export default CategoryBar;
