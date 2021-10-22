import { API } from "aws-amplify";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { putNotification, setModalOpen } from "../../store/actions/utilAction";
import {
  getProductDescription,
  getProductImage,
} from "../../store/actions/productAction";

const Product = ({ product }) => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const [selectedVariation, setSelectedVariation] = useState({});
  const [selectedImages, setSelectedImages] = useState(
    product.image
      ? product.image
      : product.variation.color[Object.keys(product.variation.color)[0]].image
  );
  const [selectedImage, setSelectedImage] = useState(getProductImage(product));
  const [selectedPrice, setSelectedPrice] = useState(parseFloat(product.price));
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (selectedVariation.color) {
      setSelectedImages(product.variation.color[selectedVariation.color].image);
    }

    const extras = [parseFloat(product.price)];
    selectedVariation &&
      Object.keys(selectedVariation).map((variable) => {
        const extraCharge = Object(
          Object(product.variation[variable])[selectedVariation[variable]]
        ).extra;
        console.log(extraCharge);
        extraCharge !== undefined && extras.push(parseFloat(extraCharge));
      });

    console.log(extras);
    extras.length > 0 && setSelectedPrice(extras.reduce((sum, x) => sum + x));
  }, [selectedVariation]);

  useEffect(() => {
    setSelectedImage(selectedImages[0]);
  }, [selectedImages]);

  const onSubmitHandler = () => {
    const purchaseData = {
      product,
      selectedVariation,
      image: selectedImages[0],
      purchasedPrice: parseFloat((selectedPrice * quantity).toFixed(2)),
      selectedPrice: selectedPrice,
      buyerEmail: profile.email,
      buyer: profile.username,
      quantity: parseInt(quantity),
    };

    console.log(purchaseData);
    product.variation
      ? !selectedVariation.color
        ? dispatch(
            putNotification(
              "Warning",
              null,
              "Please select product variation(s)",
              null
            )
          )
        : dispatch(
            putNotification(
              "Notification",
              null,
              "Product added to cart",
              purchaseData
            )
          )
      : dispatch(
          putNotification(
            "Notification",
            null,
            "Product added to cart",
            purchaseData
          )
        );
    dispatch(setModalOpen("notification", true));
  };

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-10 gap-8 min-h-screen py-10 px-2 sm:px-4">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex col-span-10 lg:col-span-5">
        <div className="flex flex-col gap-2">
          {selectedImages.map((image, index) => (
            <div
              key={product.title + "image" + index}
              onClick={() => setSelectedImage(image)}
              className="relative w-10 h-10 cursor-pointer border"
            >
              <Image
                src={image}
                layout="fill"
                alt={product.title + "image" + index}
              />
            </div>
          ))}
        </div>
        <div className="relative w-40 h-40 sm:w-96 sm:h-96 mx-auto">
          <Image src={selectedImage} layout="fill" alt={product.title} />
        </div>
      </div>
      <div className="col-span-10 md:col-span-6 lg:col-span-3">
        <div className="border-b pb-2">
          <p className="text-2xl">{product.title}</p>
          <p className="text-sm">rating goes here</p>
        </div>
        <div className="text-sm font-medium leading-5">
          <p className="py-2">
            Price:{" "}
            <span className="text-base text-red-600">${selectedPrice}</span>
          </p>
          <p>
            <span className="text-blue-700 font-semibold cursor-pointer hover:text-blue-400">
              Get 5% back ($0.99 in rewards)
            </span>{" "}
            on the amount charged to your Amazon Prime Rewards Visa Signature
            Card.
          </p>
          <p>
            May be available at a lower price from other sellers, potentially
            without free Prime shippin
          </p>
          <p className="px-2 py-6">{product.description}</p>

          <div>
            {product.variation &&
              Object.keys(product.variation).map((variation, index) => (
                <div key={product.title + variation}>
                  <p className="px-1.5 font-medium text-gray-500">
                    {variation}:{" "}
                    <span className="font-bold text-black">
                      {selectedVariation && selectedVariation[variation]}
                    </span>
                  </p>
                  <div className="flex-grow w-full h-full">
                    {Object.keys(product.variation[variation]).map((choice) => (
                      <div
                        key={product.title + variation + choice}
                        onClick={() => {
                          setSelectedVariation({
                            ...selectedVariation,
                            [variation]: choice,
                          });
                        }}
                        className="inline-block mx-1.5 my-1.5"
                      >
                        <p
                          className={`border max-w-max w-full px-2 py-1 cursor-pointer hover:border-yellow-400 hover:bg-gray-100 hover:shadow-lg
                          ${
                            selectedVariation &&
                            selectedVariation[variation] === choice &&
                            "border-yellow-400 bg-gray-100 shadow-lg"
                          }`}
                        >
                          {choice}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          <p className="text-gray-400 mt-6">Compare with similar items</p>
        </div>
      </div>
      <div className="col-span-10 md:col-span-4 lg:col-span-2">
        <div className="border rounded-lg text-sm font-medium overflow-hidden">
          <div className="p-4">
            <div className="flex justify-between items-center">
              <p className="font-bold">Buy new:</p>
              <p className="text-red-500">${selectedPrice * quantity}</p>
            </div>
            <p className="py-2">Prime & FREE Returns</p>
            <p>
              Free delivery{" "}
              <span className="font-bold">Tomorrow, October 21.</span> Order
              with in <span className="text-red-500">12 hrs 30 mins</span>
            </p>
            <p className="pt-4 pb-2 flex gap-2 text-xs text-gray-400 font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-black mt-1"
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
              Deliver to {profile.username} - Alexandria, 22312
            </p>
            <p className="text-red-500 text-lg">In Stock</p>
            <select
              onChange={(e) => setQuantity(e.target.value)}
              className="text-xs bg-gray-200 rounded-lg h-7 w-16 px-0.5 py-1 my-2"
            >
              <option value={1}>Qty: 1</option>
              <option value={2}>Qty: 2</option>
              <option value={3}>Qty: 3</option>
              <option value={4}>Qty: 4</option>
              <option value={5}>Qty: 5</option>
            </select>

            <p
              onClick={() => onSubmitHandler()}
              className="text font-normal text-sm max-w-xs mx-auto w-full bg-yellow-300 py-1.5 text-center rounded-full hover:shadow-md my-2 cursor-pointer"
            >
              Add to Cart
            </p>
            <p className="text font-normal text-sm max-w-xs mx-auto w-full bg-yellow-500 py-1.5 text-center rounded-full hover:shadow-md my-2 cursor-pointer">
              Buy Now
            </p>

            <p className="py-2">Ships from and sold by Amazon.com</p>
            <p className="py-2">
              Return policy:{" "}
              <span className="text-gray-400 font-normal">
                Extended holiday return window till Jan 31, 2022
              </span>
            </p>

            <div className="flex items-start gap-2 pt-2 pb-6">
              <input type="checkbox" className="mt-0.5" />
              <p className="text-xs font-normal">
                Add a gift receipt for easy returns
              </p>
            </div>
          </div>
          <div className="bg-gray-200 p-4">
            <p>Save with Used - Good</p>
            <p>$17.49</p>

            <p>
              Free delivery:{" "}
              <span className="font-bold">Saturyday, October 23.</span>
            </p>
            <p className="text-xs font-normal">Ships from: Amazon</p>
            <p className="text-xs font-normal">Sold by: Amazon Warehouse</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps({ params }) {
  const res = await API.get("amzproductapi", `/product/${params.id}`, {});
  const product = await res.body;

  console.log(product);

  return {
    props: {
      product,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
  const res = await API.get("amzproductapi", "/product", {});
  //   let body = await JSON.parse(res.data.body);
  // products = body.data.Items;
  const products = res.body;

  // Get the paths we want to pre-render based on posts
  const paths = products.map((product) => ({
    params: { id: product.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
}

export default Product;
