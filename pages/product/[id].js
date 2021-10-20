import { API } from "aws-amplify";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useSelector } from "react-redux";

const Product = ({ product }) => {
  const profile = useSelector((state) => state.profile);
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-10 gap-8 min-h-screen py-10 px-2 sm:px-4">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative col-span-10 lg:col-span-5 w-96 h-96 mx-auto">
        <Image src={product.image} layout="fill" alt={product.title} />
      </div>
      <div className="col-span-10 md:col-span-6 lg:col-span-3">
        <div className="border-b pb-2">
          <p className="text-2xl">{product.title}</p>
          <p className="text-sm">rating goes here</p>
        </div>
        <div className="text-sm font-medium leading-5">
          <p className="py-2">
            Price:{" "}
            <span className="text-base text-red-600">
              ${product.price[0]} - ${product.price[1]}
            </span>
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

          <p className="text-gray-400 mt-6">Compare with similar items</p>
        </div>
      </div>
      <div className="col-span-10 md:col-span-4 lg:col-span-2">
        <div className="border rounded-lg text-sm font-medium overflow-hidden">
          <div className="p-4">
            <div className="flex justify-between items-center">
              <p className="font-bold">Buy new:</p>
              <p className="text-red-500">${product.price[1]}</p>
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
            <select className="text-xs bg-gray-200 rounded-lg h-7 w-16 px-0.5 py-1 my-2">
              <option>Qty: 1</option>
              <option>Qty: 2</option>
              <option>Qty: 3</option>
              <option>Qty: 4</option>
              <option>Qty: 5</option>
            </select>

            <p className="text font-normal text-sm max-w-xs mx-auto w-full bg-yellow-300 py-1.5 text-center rounded-full hover:shadow-md my-2">
              Add to Cart
            </p>
            <p className="text font-normal text-sm max-w-xs mx-auto w-full bg-yellow-500 py-1.5 text-center rounded-full hover:shadow-md my-2">
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