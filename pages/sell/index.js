import React from "react";
import SellerHeader from "../../components/layouts/SellerHeader";
import Image from "next/image";
import SellGrid from "../../components/Sell/SellGrid";

const Sell = () => {
  return (
    <div>
      <SellerHeader />
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-10 pt-48 z-0">
        <div className="flex justify-between items-center mb-20">
          <div className="max-w-lg">
            <p className="text-7xl font-extrabold text-gray-700 leading-tight mb-10">
              Become an Amazon seller
            </p>
            <p className="bg-yellow-400 text-xl max-w-max py-2.5 px-8 rounded-full font-bold cursor-pointer shadow-md hover:shadow-lg mb-3">
              Sign up
            </p>
            <p className="text-xs text-gray-800">
              #39.99 a month + selling fees
            </p>
          </div>
          <div className="hidden sm:block relative w-72 h-96 mx-auto flex-shrink-0">
            <Image src="/sellbg.png" layout="fill" alt="sellBackground" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
          <SellGrid
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            }
            title="Reach millions"
            description="Fresh new startups and Fortune 500s. B2B and B2C. Brand owners and resellers. They all sell on Amazon for a reason: 300 million customers shop our stores worldwide."
            refText="How it works"
            link=""
          />
          <SellGrid
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            }
            title="Deliver smiles"
            description="Leave the shipping, returns, and customer service to us with Fulfillment by Amazon (FBA). Want to take care of shipping yourself? You can do that too."
            refText="Explore shipping"
            link=""
          />
          <SellGrid
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
            title="Make money"
            description="Choose from flexible selling plans, product categories, and fulfillment options that fit your business needs."
            refText="See pricing"
            link=""
          />
        </div>
      </div>

      <div className="bg-category my-20">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 text-white py-10">
          <p className="uppercase text-sm font-medium pb-6">Success Storeis</p>
          <div className="flex justify-between items-baseline">
            <p className="text-4xl font-extrabold pb-4">Why Sell With Us</p>
            <p className="text-sm tracking-widest">01/04</p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 border-b border-t border-gray-500 py-10">
            <p className="text-3xl">
              Since 2000, businesses of all sizes have increased sales and
              reached new customers with Amazon.
            </p>
            <div className="relative max-w-lg w-full h-80">
              <Image src="/sellStory.jpg" alt="sellStory" layout="fill" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 text-gray-800 py-40">
        <p className="text-6xl font-extrabold leading-snug pb-6">
          Stay connected
        </p>
        <p className="font-semibold pb-8">
          Sign up for helpful tips on building an Amazon business
        </p>
        <div className="flex gap-5 items-center py-2">
          <input
            type="text"
            placeholder="Enter your email address"
            className="bg-gray-200 h-8 w-60 sm:w-72 px-2 text-sm"
          />
          <p className="border-2 rounded-full py-1 text-sm font-semibold px-4 border-gray-800 cursor-pointer hover:shadow-lg">
            Subscribe
          </p>
        </div>
        <p className="text-xs">Zero spam. Unsubscribe at any time.</p>
      </div>
    </div>
  );
};

export default Sell;
