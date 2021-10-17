import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
const SellerHeader = () => {
  const router = useRouter();
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <>
      <div className="bg-category">
        <div
          className={`${
            openSearch ? "h-0" : "h-10 delay-500"
          } transform duration-500 max-w-7xl mx-auto w-full flex justify-between items-center text-white overflow-hidden`}
        >
          <p className="text-sm">
            Amazon Accelerate: A free virtual event October 20–21.{" "}
            <Link href="#">
              <a className="underline">Learn more</a>
            </Link>
          </p>

          <div className="flex gap-10">
            <p className="flex gap-2 justify-center items-center cursor-pointer py-1 px-3 rounded-full transform duration-500 hover:bg-gray-700">
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
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              English
            </p>
            <p className="flex gap-2 justify-center items-center cursor-pointer py-1 px-3 rounded-full transform duration-500 hover:bg-gray-700">
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
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Log in
            </p>
          </div>
        </div>
      </div>
      <div className="shadow-lg h-20 flex justify-between items-center">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center h-full">
          <div className="flex justify-center items-center gap-6 h-full">
            <div
              onClick={() => router.push("/")}
              className="relative h-10 w-28 object-fit cursor-pointer mr-10"
            >
              <Image
                className="my-1"
                src="/logo2.png"
                layout="fill"
                alt="logo"
              />
            </div>
            <p className="gap-1 flex justify-center items-center font-semibold text-sm cursor-pointer h-full border-b-4 border-transparent transform duration-500 hover:border-indigo-400">
              Start
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </p>
            <p className="gap-1 flex justify-center items-center font-semibold text-sm cursor-pointer h-full border-b-4 border-transparent transform duration-500 hover:border-indigo-400">
              Grow
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </p>
            <p className="gap-1 flex justify-center items-center font-semibold text-sm cursor-pointer h-full border-b-4 border-transparent transform duration-500 hover:border-indigo-400">
              Learn
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </p>
            <p className="gap-1 flex justify-center items-center font-semibold text-sm cursor-pointer h-full border-b-4 border-transparent transform duration-500 hover:border-indigo-400">
              Pricing
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </p>
          </div>
          <div className="flex justify-center items-center gap-6">
            <p className="bg-yellow-400 py-1.5 px-6 rounded-full cursor-pointer transform duration-500 hover:shadow-lg">
              Sign Up
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setOpenSearch(!openSearch)}
              className="h-6 w-6 text-gray-400 cursor-pointer hover:text-blue-400"
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
      </div>
      <div
        className={`${
          openSearch ? "h-56" : "h-0 delay-500"
        } transform duration-500 overflow-hidden flex flex-col gap-2 bg-indigo-400 w-full justify-center items-center `}
      >
        <input type="text" className="h-10 w-96 z-20" />
        <div className="flex justify-center items-center gap-4 text-white">
          <p className="text-sm">Quick Links: </p>
          <p className="text-sm font-semibold underline">Selling on Amazon</p>
          <p className="text-sm font-semibold underline">
            Fulfillment by Amazon
          </p>
        </div>
      </div>

      {openSearch && (
        <div
          onClick={() => {
            setOpenSearch(false);
          }}
          className="absolute inset-0 w-full h-screen z-10 bg-black opacity-50"
        ></div>
      )}
    </>
  );
};

export default SellerHeader;
