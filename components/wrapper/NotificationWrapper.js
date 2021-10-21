import { Fragment, useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { clearNotification } from "../../store/actions/utilAction";
import Image from "next/image";
const NotificationWrapper = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.util.notification);
  const { type, message, icon, product } = notification;
  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (open && seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (open && seconds === 0) {
        dispatch(clearNotification());
        setOpen(false);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const color = () => {
    switch (type) {
      case "Notification":
        return "border-green-500 text-green-500";
      case "Warning":
        return "border-yellow-300 text-yellow-300";
      case "Danger":
        return "border-red-600 text-red-600";
    }
  };

  return (
    <>
      <div
        aria-live="assertive"
        className="w-full px-4 max-w-md fixed top-16 right-1/2 transform translate-x-1/2 sm:translate-x-0 sm:top-16 sm:right-10 z-20 flex items-center justify-center"
      >
        <Transition
          show={open}
          as={Fragment}
          enter="transform ease-out duration-300 transition"
          enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enterTo="translate-y-0 opacity-100 sm:translate-x-0"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className={`flex justify-between items-start gap-4 p-2 w-full bg-white shadow-2xl rounded-lg border-2 overflow-hidden ${color()}`}
          >
            {product && (
              <div className="relative my-auto w-20 h-20 flex-shrink-0">
                <Image
                  src={product.selectedVariation.image}
                  layout="fill"
                  alt={product.title}
                />
              </div>
            )}
            <div className="flex flex-1 flex-col ">
              <div className="flex justify-between items-center">
                <p className="text-sm">{type}</p>
                <p className="text-xs text-dark">
                  disappear in {seconds} sec...
                </p>
              </div>
              <p className="font-semibold text-dark">{message}</p>
              {product &&
                Object.keys(product.selectedVariation).map(
                  (variation, index) => (
                    <div key={product.title + "variation" + index}>
                      {variation !== "image" && (
                        <p className="text-xs capitalize">
                          {variation}:{" "}
                          <span className="font-semibold">
                            {product.selectedVariation[variation]}
                          </span>
                        </p>
                      )}
                    </div>
                  )
                )}
            </div>
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-7 w-7 p-0.5 border-2 rounded-full cursor-pointer hover:border-gray-200 hover:text-gray-200 ${color()}`}
                onClick={() => {
                  setOpen(false);
                }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </Transition>
      </div>
    </>
  );
};

export default NotificationWrapper;
