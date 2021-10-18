import React from "react";
import Image from "next/image";
const SellGrid = ({ svg, title, description, refText, link }) => {
  return (
    <div className="w-96 md:w-60 lg:w-80 xl:w-96 h-80 shadow-2xl rounded-lg mx-auto flex flex-col justify-start p-10 text-gray-700">
      {svg}
      <p className="text-2xl font-extrabold py-4">{title}</p>
      <p className="text-sm pb-4 flex-1">{description}</p>
      <p className="text-xs">{refText} =></p>
    </div>
  );
};

export default SellGrid;
