import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Modals from "./Modals";
import { Auth, API } from "aws-amplify";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../store/actions/profileAction";
import { getProducts } from "../../store/actions/productAction";

const Footer = () => {
  const cognito = useSelector((state) => state.profile.cognito);
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  const checkUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      dispatch(getProfile(user));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!cognito.email) {
      console.log("getting user");
      checkUser();
    }
  }, [cognito]);

  useEffect(() => {
    if (products.length < 1) {
      console.log("fetching prodcuts");
      dispatch(getProducts());
    }
    fetchOne();
  }, []);

  const fetchOne = async () => {
    const res = await API.get("amzproductapi", "/product/001", {});
  };
  const addProduct = async () => {
    const data = {
      body: {
        id: "004",
        title: "Samsung Galaxy Watch 4 ",
        category: ["Samsung", "Electronics", "Watch", "Galaxy"],
        price: "329.99",
        priceRange: ["329.99", "449.99"],
        description:
          "Samsung Galaxy Watch 4 Classic 46mm Smartwatch with ECG Monitor Tracker for Health Fitness Running Sleep Cycles GPS Fall Detection Bluetooth US Version",
        image: "",
        discount: 10,
        variation: {
          color: {
            silver: {
              image: [
                "https://m.media-amazon.com/images/I/71yNmp4OnXS._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71xd-u2cG4S._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/61v7awnQrKL._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/51S2e043r8L._AC_SL1500_.jpg",
              ],

              quantity: 30,
            },
            black: {
              image: [
                "https://m.media-amazon.com/images/I/61yY7B+O5AS._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71+GEsWLIzS._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/61THl45b6XL._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/51Sal1AeD9L._AC_SL1500_.jpg",
              ],
              quantity: 28,
            },
          },
          size: {
            "42 mm": {
              extra: "0",
            },
            "46 mm": {
              extra: "30",
            },
          },
          style: {
            Bluetooth: {
              extra: "0",
            },
            "Bluetooth with Wireless Charger": {
              extra: "60",
            },
            LTE: {
              extra: "50",
            },
            "LTE with Wireless Charger": {
              extra: "120",
            },
          },
        },
      },
    };
    try {
      API.post("amzproductapi", "/product", data)
        .then((res) => {
          console.log(res);
          dispatch(getProducts());
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  const updateProduct = async () => {
    const data = {
      body: {
        id: "001",
        title: "Samsung Galaxy Note 20 ",
        price: "899.99",
        description:
          "Samsung Galaxy Note 20 Ultra 5G Factory Unlocked Android Cell Phone 128GB US Version Mobile Gaming Smartphone Long-Lasting Battery, Mystic Bronze",
        image: [
          "https://m.media-amazon.com/images/I/81AT+Flc+EL._AC_SL1500_.jpg",
        ],
      },
    };

    try {
      API.post("amzproductapi", "/product", data)
        .then((res) => {
          console.log(res);
          dispatch(getProducts());
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-header">
      <div className="max-w-3xl mx-auto flex justify-between items-start text-gray-400 pt-10 pb-16 px-2 sm:px-4">
        <div className="flex flex-col gap-2 px-2">
          <p className="font-semibold text-sm text-white">Get to Know Us</p>
          <p
            onClick={() => addProduct()}
            className="text-xs hover:underline cursor-pointer"
          >
            Careers
          </p>
          <p
            onClick={() => updateProduct()}
            className="text-xs hover:underline cursor-pointer"
          >
            Blog
          </p>
          <p className="text-xs hover:underline cursor-pointer">About Amazon</p>
          <p className="text-xs hover:underline cursor-pointer">
            Sustainablity
          </p>
          <p className="text-xs hover:underline cursor-pointer">Press Center</p>
        </div>
        <div className="flex flex-col gap-2 px-2">
          <p className="font-semibold text-sm text-white">Make Money with Us</p>
          <Link href="/sell">
            <a className="text-xs hover:underline cursor-pointer">
              Sell products on Amazon
            </a>
          </Link>
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

      <Modals />
    </div>
  );
};

export default Footer;
