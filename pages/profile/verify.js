import Auth from "@aws-amplify/auth";
import router from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Verify = () => {
  const email = useSelector((state) => state.profile.email);
  const username = useSelector((state) => state.profile.username);
  const [authCode, setAuthCode] = useState("");

  const confirmSignUp = async () => {
    try {
      await Auth.confirmSignUp(username, authCode);
      router.push("/profile/signIn");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="max-w-7xl mx-auto flex flex-col justify-center items-center h-full py-32">
      <div className="border rounded-sm w-96 p-4 flex flex-col">
        <p className="text-3xl pb-4">Email Verification</p>

        <p className="text-sm">
          Verification code has been sent to{" "}
          <span className="font-semibold">{email}</span>
        </p>

        <label className="text-sm font-bold pt-4">Verification code</label>
        <div className="w-full relative">
          <input
            onChange={(e) => setAuthCode(e.target.value)}
            value={authCode}
            className="px-2 w-full mt-0.5 border text-sm rounded h-8 border-gray-600 outline-none focus:ring-2 ring-yellow-400"
            type="text"
          />
        </div>

        <p
          onClick={confirmSignUp}
          className="w-full h-8 my-6 bg-yellow-300 border border-gray-800 rounded flex justify-center items-center text-xs cursor-pointer hover:shadow-md"
        >
          Verify
        </p>
      </div>
    </div>
  );
};

export default Verify;
