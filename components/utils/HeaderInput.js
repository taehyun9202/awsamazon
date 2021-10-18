import React, { useState } from "react";

const HeaderInput = () => {
  const [select, setSelect] = useState("All");
  return (
    <div className="relative flex h-9 justify-center rounded-md overflow-hidden group ring-2 ring-transparent focus-within:ring-yellow-500">
      <select
        onChange={(e) => setSelect(e.target.value)}
        className="hidden lg:block bg-gray-200 w-48 h-full text-gray-900 text-xs px-2"
        value={select}
      >
        <option value="All">All</option>
        <option value="Sports & Fitness">Sports & Fitness</option>
        <option value="Shopper ToolKit">Shopper ToolKit</option>
        <option value="Gift Cards">Gift Cards</option>
      </select>

      <input className="w-full outline-none" type="text" />

      <div className="absolute text-gray-900 top-0 right-0 bg-yellow-400 h-9 w-9 flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeaderInput;
