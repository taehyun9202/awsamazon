import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Modals from "./Modals";
import { Auth, API } from "aws-amplify";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, updateCart } from "../../store/actions/profileAction";
import { getProducts } from "../../store/actions/productAction";

const Footer = () => {
  const profile = useSelector((state) => state.profile);
  const cognito = useSelector((state) => state.profile.cognito);
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  const checkUser = async () => {
    try {
      console.log("check user");
      const user = await Auth.currentAuthenticatedUser();

      console.log(user);
      dispatch(getProfile(user));

      API.get("amzprofile", `/profile/${user.attributes.sub}`)
        .then((res) => {
          console.log(res);
          dispatch(updateCart(res.data.Item.cart));
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (profile.token && !cognito.email) {
      console.log("getting user");
      checkUser();
    }
  }, [cognito]);

  useEffect(() => {
    if (products.length < 1) {
      console.log("fetching prodcuts");
      dispatch(getProducts());
    }
    checkUser();
  }, []);

  const addProduct = async () => {
    const data = {
      body: {
        id: "007",
        title: "2021 Apple iPad Pro",
        category: ["Apple", "Electronics", "Tablet", "iPad"],
        price: "1099.00",
        priceRange: ["1099.00", "2299.00"],
        description:
          "Apple M1 chip for next-level performance. Brilliant 12.9-inch Liquid Retina XDR display with ProMotion, True Tone, and P3 wide color. TrueDepth camera system featuring Ultra Wide camera with Center Stage.",
        image: "",
        discount: 10,
        variation: {
          color: {
            Silver: {
              image: [
                "https://m.media-amazon.com/images/I/815KnP2wjDS._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71bwIJGoOhS._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/81xu+s01lrS._AC_SL1500_.jpg",
              ],

              quantity: 17,
            },
            "Space Gray": {
              image: [
                "https://m.media-amazon.com/images/I/81+N4PFF7jS._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71Qltdecc4S._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/81xu+s01lrS._AC_SL1500_.jpg",
              ],
              quantity: 7,
            },
          },
          size: {
            "128 GB": {
              extra: "0",
            },
            "256 BG": {
              extra: "100",
            },
            "512 BG": {
              extra: "350",
            },
            "1 TB": {
              extra: "500",
            },
            "2 TB": {
              extra: "1000",
            },
          },
          style: {
            WiFi: {
              extra: "0",
            },
            "WiFi with Cellular": {
              extra: "250",
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

  const addProfile = async () => {
    const userData = {
      body: {
        id: "aef4d53a-9d68-4412-b4fd-4acc5264775b",
        email: "taehyun9202@hotmail.com",
        username: "bisange",
      },
    };
    try {
      const newProfile = await API.post("amzprofile", "/profile", userData);
      console.log(newProfile);
    } catch (err) {
      console.log(err);
    }
  };

  const checkProfile = async () => {
    try {
      const res = await API.get(
        "amzprofile",
        `/profile/aef4d53a-9d68-4412-b4fd-4acc5264775b`
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-header">
      <div className="max-w-6xl mx-auto flex justify-between items-start text-gray-400 pt-10 pb-16 px-2 sm:px-4">
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
          <p
            onClick={() => addProfile()}
            className="text-xs hover:underline cursor-pointer"
          >
            About Amazon
          </p>
          <p
            onClick={() => checkProfile()}
            className="text-xs hover:underline cursor-pointer"
          >
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
