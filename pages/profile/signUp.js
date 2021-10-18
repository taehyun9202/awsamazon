import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const SignUp = () => {
  const router = useRouter();
  return (
    <div className="max-w-7xl mx-auto flex flex-col justify-center items-center h-full py-32">
      <div className="border rounded-sm w-96 p-4 flex flex-col">
        <p className="text-3xl pb-4">Create account</p>
        <label className="text-sm font-bold">Your name</label>
        <input
          className="px-2 mt-0.5 border text-sm rounded h-8 border-gray-600 outline-none focus:ring-2 ring-yellow-400"
          type="text"
        />

        <label className="text-sm font-bold pt-4">Email</label>
        <input
          className="px-2 mt-0.5 border text-sm rounded h-8 border-gray-600 outline-none focus:ring-2 ring-yellow-400"
          type="email"
        />

        <label className="text-sm font-bold pt-4">Password</label>
        <input
          className="px-2 mt-0.5 border text-sm rounded h-8 border-gray-600 outline-none focus:ring-2 ring-yellow-400"
          type="password"
          placeholder="At least 6 characters"
        />
        <p className="text-xs pt-1">Passwords must be at least 6 characters.</p>

        <label className="text-sm font-bold pt-4">Re-enter password</label>
        <input
          className="px-2 mt-0.5 border text-sm rounded h-8 border-gray-600 outline-none focus:ring-2 ring-yellow-400"
          type="password"
        />

        <button className="w-full h-8 my-6 bg-yellow-300 border border-gray-800 rounded flex justify-center items-center text-xs cursor-pointer hover:shadow-md">
          Create your Amazon account
        </button>
        <p className="text-xs">
          By continuing, you agree to Amazon&apos;s{" "}
          <Link href="#">
            <a target="_blank" className="text-blue-500">
              Conditions of Use
            </a>
          </Link>{" "}
          and{" "}
          <Link href="#">
            <a target="_blank" className="text-blue-500">
              Privacy Notice.
            </a>
          </Link>
        </p>
        <p className="text-xs pt-10">
          Already have an account?{" "}
          <Link href="/profile/signIn">
            <a className="text-blue-500">Sign in</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
