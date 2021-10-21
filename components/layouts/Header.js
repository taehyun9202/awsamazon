import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import HeaderInput from "../utils/HeaderInput";
import CategoryBar from "./CategoryBar";
import { useRouter } from "next/dist/client/router";
import { setModalOpen } from "../../store/actions/utilAction";

const Header = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const router = useRouter();
  return (
    <>
      <div className="bg-header px-2 sm:px-4 text-white gap-2">
        <div className="flex items-center justify-between h-16">
          <div
            onClick={() => router.push("/")}
            className="relative h-10 w-24 flex-shrink-0 object-fit cursor-pointer ring-0 ring-white border-8 border-transparent  rounded-sm hover:ring-1"
          >
            <Image className="my-1" src="/logo.png" layout="fill" alt="logo" />
          </div>

          <div className="hidden lg:flex justify-center items-center gap-1 cursor-pointer h-10 p-1 ring-1 ring-transparent rounded-sm hover:ring-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {profile.token ? (
              <div>
                <p className="text-xs text-gray-400 font-semibold">
                  Deliver to {profile.username}
                </p>
                <p className="text-sm font-bold">Alexandria, 22312</p>
              </div>
            ) : (
              <div>
                <p className="text-xs text-gray-400 font-semibold">Hello</p>
                <p className="text-sm font-bold">Select your address</p>
              </div>
            )}
          </div>

          <div className="hidden sm:block flex-1 mx-2">
            <HeaderInput />
          </div>

          <div className="flex">
            <div className="flex gap-1 justify-center items-center cursor-pointer h-10 p-1 ring-1 ring-transparent rounded-sm hover:ring-white">
              <div
                onClick={() => {
                  profile.token ? null : router.push("/profile/signIn");
                }}
              >
                <p className="text-xs font-semibold line-clamp-1">
                  Hello, {profile.token ? profile.username : "Sign in"}
                </p>
                <p className="text-sm font-bold">Account & Lists</p>
              </div>
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
            </div>

            <div className="hidden sm:flex gap-1 justify-center items-center cursor-pointer h-10 p-1 ring-1 ring-transparent rounded-sm hover:ring-white">
              <div>
                <p className="text-xs font-semibold">Returns</p>
                <p className="text-sm font-bold">& Orders</p>
              </div>
            </div>

            <div
              onClick={() => dispatch(setModalOpen("cart", true))}
              className="flex justify-center items-center cursor-pointer h-10 pt-3 p-1 ring-1 ring-transparent rounded-sm hover:ring-white"
            >
              <p className="relative flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Cart
                <span className="absolute bg-yellow-500 h-5 w-5 rounded-full flex justify-center items-center text-xs -top-2 left-3">
                  20
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="sm:hidden flex-1 mx-2 pb-4">
          <HeaderInput />
        </div>
      </div>
      <CategoryBar />
    </>
  );
};

export default Header;
