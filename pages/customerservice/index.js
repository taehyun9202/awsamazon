import React from "react";

const CustomerService = () => {
  return (
    <div className="pb-20">
      <div className="py-8 border-b-2 shadow">
        <p className="max-w-7xl mx-auto px-2 sm:px-4 text-2xl font-medium">
          Hello, What can we help you with?
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-8">
        <p className="text-xl font-medium pb-4">
          What can we assist you with today?
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8 border-b">
          <div className="border flex justify-between items-center px-4 gap-4 rounded-md h-24 hover:shadow-lg cursor-pointer">
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
                d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
              />
            </svg>
            <div className="flex-1">
              <p className="font-semibold">Your Orders</p>
              <p className="text-xs leading-4 font-medium text-gray-600">
                Track packages
              </p>
              <p className="text-xs leading-4 font-medium text-gray-600">
                Edit or cancel orders
              </p>
            </div>
          </div>

          <div className="border flex justify-between items-center px-4 gap-4 rounded-md h-24 hover:shadow-lg cursor-pointer">
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
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>

            <div className="flex-1">
              <p className="font-semibold">Returns & Refunds</p>
              <p className="text-xs leading-4 font-medium text-gray-600">
                Return or exchange items
              </p>
              <p className="text-xs leading-4 font-medium text-gray-600">
                Print return mailing labels
              </p>
            </div>
          </div>

          <div className="border flex justify-between items-center px-4 gap-4 rounded-md h-24 hover:shadow-lg cursor-pointer">
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
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <div className="flex-1">
              <p className="font-semibold">Het Product Help</p>
              <p className="text-xs leading-4 font-medium text-gray-600">
                Troubleshoot product setup and useage issues
              </p>
            </div>
          </div>

          <div className="border flex justify-between items-center px-4 gap-4 rounded-md h-24 hover:shadow-lg cursor-pointer">
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
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>

            <div className="flex-1">
              <p className="font-semibold">Digital Services and Support</p>
              <p className="text-xs leading-4 font-medium text-gray-600">
                Troubleshoot device isuues
              </p>
            </div>
          </div>

          <div className="border flex justify-between items-center px-4 gap-4 rounded-md h-24 hover:shadow-lg cursor-pointer">
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
                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
              />
            </svg>

            <div className="flex-1">
              <p className="font-semibold">Manage Prime</p>
              <p className="text-xs leading-4 font-medium text-gray-600">
                Learn about Prime benefits
              </p>
              <p className="text-xs leading-4 font-medium text-gray-600">
                Cancel Prime membership
              </p>
            </div>
          </div>

          <div className="border flex justify-between items-center px-4 gap-4 rounded-md h-24 hover:shadow-lg cursor-pointer">
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
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
            <div className="flex-1">
              <p className="font-semibold">Payments & Gift Cards</p>
              <p className="text-xs leading-4 font-medium text-gray-600">
                Add or edit payment methods
              </p>
              <p className="text-xs leading-4 font-medium text-gray-600">
                View, reload gift card balance
              </p>
            </div>
          </div>

          <div className="border flex justify-between items-center px-4 gap-4 rounded-md h-24 hover:shadow-lg cursor-pointer">
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
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <div className="flex-1">
              <p className="font-semibold">Your Account</p>
              <p className="text-xs leading-4 font-medium text-gray-600">
                Manage your account preferences
              </p>
            </div>
          </div>

          <div className="border flex justify-between items-center px-4 gap-4 rounded-md h-24 hover:shadow-lg cursor-pointer">
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
                d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
              />
            </svg>

            <div className="flex-1">
              <p className="font-semibold">Amazon and COVID-19</p>
              <p className="text-xs leading-4 font-medium text-gray-600">
                Impacts on orders and deliveries
              </p>
              <p className="text-xs leading-4 font-medium text-gray-600">
                Amazon COVID-19 Test Collection Kit DTC
              </p>
            </div>
          </div>

          <div className="border flex justify-between items-center px-4 gap-4 rounded-md h-24 hover:shadow-lg cursor-pointer">
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
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>

            <div className="flex-1">
              <p className="font-semibold">Safe Online Shopping</p>
              <p className="text-xs leading-4 font-medium text-gray-600">
                Learn how to protect your account
              </p>
              <p className="text-xs leading-4 font-medium text-gray-600">
                Report something suspicous
              </p>
            </div>
          </div>
        </div>
        <div className="py-8">
          <p className="font-semibold">
            Search the help library  {" "}
            <span className="italic text-sm">
              Type something like, &quot;question about a charge&quot;
            </span>
          </p>
          <div className="relative">
            <input
              type="text"
              className="h-8 px-7 text-sm rounded w-full border border-gray-500 outline-none focus:ring-2 ring-blue-400"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 absolute left-2 top-2"
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

      <div className="border-t">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-8">
          <p className="text-2xl font-semibold">Browse Help Topics</p>

          <div className="border flex rounded-lg w-full h-96 overflow-hidden">
            <div className="w-60 bg-gray-100 h-full p-4">
              <p className="text-sm leading-7 cursor-default hover:text-yellow-400">
                Recommended Topics
              </p>
              <p className="text-sm leading-7 cursor-default hover:text-yellow-400">
                Where&apos;s My Stuff?
              </p>
              <p className="text-sm leading-7 cursor-default hover:text-yellow-400">
                Shipping and Delivery
              </p>
              <p className="text-sm leading-7 cursor-default hover:text-yellow-400">
                Returns and Refunds
              </p>
              <p className="text-sm leading-7 cursor-default hover:text-yellow-400">
                Manageing Your Account
              </p>
              <p className="text-sm leading-7 cursor-default hover:text-yellow-400">
                Security and Privacy
              </p>
              <p className="text-sm leading-7 cursor-default hover:text-yellow-400">
                Payments, Pricing & Promotions
              </p>
              <p className="text-sm leading-7 cursor-default hover:text-yellow-400">
                Devices & Digital Services
              </p>
              <p className="text-sm leading-7 cursor-default hover:text-yellow-400">
                Amazon Business Account
              </p>
              <p className="text-sm leading-7 cursor-default hover:text-yellow-400">
                Large Items
              </p>
              <p className="text-sm leading-7 cursor-default hover:text-yellow-400">
                Other Topics & Help Sites
              </p>
              <p className="text-sm leading-7 cursor-default hover:text-yellow-400">
                Need More Help?
              </p>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
