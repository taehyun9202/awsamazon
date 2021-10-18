import React from "react";
import Image from "next/image";
const SellGrid = ({ svg, title, description, refText, link }) => {
  return (
    <div className="w-96 md:w-60 lg:w-80 xl:w-96 h-80 shadow-2xl rounded-lg mx-auto flex flex-col justify-start p-10 text-gray-700">
      {svg}
      <p className="text-2xl font-extrabold py-4">{title}</p>
      <p className="text-sm pb-4 flex-1">{description}</p>
      <p className="text-xs flex gap-2 items-center">
        {refText}{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3 mt-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeWinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </p>
    </div>
  );
};

export default SellGrid;
