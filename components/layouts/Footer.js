import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-category">
      <div className="max-w-3xl mx-auto flex justify-between items-start text-gray-400 pt-10 pb-16 px-2 sm:px-4">
        <div className="flex flex-col gap-2 px-2">
          <p className="font-semibold text-sm text-white">Get to Know Us</p>
          <p className="text-xs hover:underline cursor-pointer">Careers</p>
          <p className="text-xs hover:underline cursor-pointer">Blog</p>
          <p className="text-xs hover:underline cursor-pointer">About Amazon</p>
          <p className="text-xs hover:underline cursor-pointer">
            Sustainablity
          </p>
          <p className="text-xs hover:underline cursor-pointer">Press Center</p>
        </div>
        <div className="flex flex-col gap-2 px-2">
          <p className="font-semibold text-sm text-white">Make Money with Us</p>
          <p className="text-xs hover:underline cursor-pointer">
            Sell products on Amazon
          </p>
          <p className="text-xs hover:underline cursor-pointer">
            Sell apps on Amazon
          </p>
          <p className="text-xs hover:underline cursor-pointer">
            Become an Affiliate
          </p>
          <p className="text-xs hover:underline cursor-pointer">
            Become a Delivery Driver
          </p>
          <p className="text-xs hover:underline cursor-pointer">
            Start a package Delivery business
          </p>
          <p className="text-xs hover:underline cursor-pointer">
            Advertise Your Products
          </p>
          <p className="text-xs hover:underline cursor-pointer">
            Self-Publish with Us
          </p>
          <p className="text-xs hover:underline cursor-pointer">
            host an Amazon Hub
          </p>
        </div>
        <div className="flex flex-col gap-2 px-2">
          <p className="font-semibold text-sm text-white">
            Amazon Payment Products
          </p>
          <p className="text-xs hover:underline cursor-pointer">
            Amazon Rewards Visa Signature Cards
          </p>
          <p className="text-xs hover:underline cursor-pointer">Blog</p>
          <p className="text-xs hover:underline cursor-pointer">
            Amazon.com Store Card
          </p>
          <p className="text-xs hover:underline cursor-pointer">
            Amazon Secured Card
          </p>
          <p className="text-xs hover:underline cursor-pointer">
            Amazon Business Card
          </p>
          <p className="text-xs hover:underline cursor-pointer">
            Amazon Business Line of Credit
          </p>
          <p className="text-xs hover:underline cursor-pointer">
            Shop with Points
          </p>
          <p className="text-xs hover:underline cursor-pointer">
            Credit Card Marketplace
          </p>
          <p className="text-xs hover:underline cursor-pointer">
            Reload Your Balance
          </p>
          <p className="text-xs hover:underline cursor-pointer">
            Amazon Currency Converter
          </p>
        </div>
        <div className="flex flex-col gap-2 px-2">
          <p className="font-semibold text-sm text-white">Let Us Help You</p>
          <p className="text-xs hover:underline cursor-pointer">
            Amazon and COVID-19
          </p>
          <p className="text-xs hover:underline cursor-pointer">Your Account</p>
          <p className="text-xs hover:underline cursor-pointer">Your Orders</p>
          <p className="text-xs hover:underline cursor-pointer">
            Shipping Rates & Policies
          </p>
          <p className="text-xs hover:underline cursor-pointer">Amazon Prime</p>
          <p className="text-xs hover:underline cursor-pointer">
            Returns & Replacements
          </p>
          <p className="text-xs hover:underline cursor-pointer">
            Manage Your Content and Devices
          </p>
          <p className="text-xs hover:underline cursor-pointer">
            Amazon Assistant
          </p>
          <p className="text-xs hover:underline cursor-pointer">Help</p>
        </div>
      </div>
      <div className="border-t px-2 sm:px-4 flex items-center justify-center py-8">
        <div className="relative w-20 h-7">
          <Image src="/logo.png" layout="fill" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
