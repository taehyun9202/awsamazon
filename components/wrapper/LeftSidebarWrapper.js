import React, { Fragment } from "react";
import { Transition } from "@headlessui/react";

const LeftSidebarWrapper = ({ children, open, setOpen }) => {
  return (
    <>
      <div
        aria-live="assertive"
        className="fixed left-0 top-0 h-screen w-screen flex items-center pointer-events-none z-20"
      >
        <div className="relative w-full h-full flex flex-col items-center space-y-4">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={open}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="-translate-x-80 opacity-0"
            enterTo="translate-x-0 opacity-100"
            leave="transform transition ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0 -translate-x-80"
          >
            {/* modal content */}
            <div className="flex flex-col absolute left-0 top-0 max-w-lg w-full h-screen bg-white shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-20">
              {children}
            </div>
          </Transition>
        </div>
      </div>
      {open && (
        <div
          onClick={() => {
            setOpen();
          }}
          className="fixed inset-0 w-full h-screen z-10 bg-black opacity-50"
        ></div>
      )}
    </>
  );
};

export default LeftSidebarWrapper;
