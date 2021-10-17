import React from "react";
import Image from "next/image";

const HomeBanner = () => {
  return (
    <div className="z-0">
      <p>Home banner</p>
      <div className="relative max-w-7xl w-full h-96 -mb-32">
        <Image src="/homeBanner1.jpg" layout="fill" alt="homeBanner" />
      </div>
    </div>
  );
};

export default HomeBanner;
