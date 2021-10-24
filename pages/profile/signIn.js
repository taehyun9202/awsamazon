import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getProfile, signIn } from "../../store/actions/profileAction";
import { Auth, API } from "aws-amplify";
import { useDispatch } from "react-redux";

const initialState = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formState, setFormState] = useState(initialState);
  const [error, setError] = useState(initialState);
  const { email, password } = formState;
  const [showPW, setShowPW] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const signIn = async () => {
    if (!formState.email) {
      setError({
        ...initialState,
        email: "Please enter your email",
      });
      return;
    }
    if (!formState.password) {
      setError({
        ...initialState,
        password: "Please enter your password",
      });
      return;
    }

    try {
      await Auth.signIn(email, password);
      const user = await Auth.currentAuthenticatedUser();
      dispatch(getProfile(user));

      const id = user.attributes.sub;
      const username = user.username;
      const useremail = user.attributes.email;

      console.log(id, username, useremail);

      try {
        const check = await API.get("amzprofile", `/profile/${id}`);

        console.log(check);
        if (check.err.statusCode === 400 || check.err === "NotFound") {
          console.log("First visit user");
          const newProfile = await API.post("amzprofile", "/profile", {
            body: {
              id: id,
              username: username,
              useremail: useremail,
            },
          });
          console.log(newProfile);
        } else {
          console.log("User already in table");
        }
      } catch (err) {
        console.log("User already in table");
      }

      router.push("/");
    } catch (err) {
      console.log(err, JSON.stringify(err));
      if (err.name === "UserNotFoundException") {
        setError({
          ...initialState,
          email: "User does not exist",
        });
      }
      if (err.name === "NotAuthorizedException") {
        setError({
          ...initialState,
          password: "Password does not match",
        });
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto flex flex-col justify-center items-center h-full py-32">
      <div className="border rounded-sm w-96 p-4 flex flex-col">
        <p className="text-3xl pb-4">Sign-In</p>
        <label className="text-sm font-bold pt-4">Email</label>
        <div className="w-full relative">
          <input
            onChange={(e) => onChangeHandler(e)}
            name="email"
            className={`px-2 w-full mt-0.5 border text-sm rounded h-8 border-gray-600 outline-none focus:ring-2 ring-yellow-400 ${error.email &&
              "ring-2 ring-red-600"}`}
            type="email"
          />
          {error.email && (
            <p className="absolute text-xs text-red-600 pt-0.5">
              {error.email}
            </p>
          )}
        </div>

        <label className="text-sm font-bold pt-4">Password</label>
        <div className="w-full relative">
          <input
            onChange={(e) => onChangeHandler(e)}
            className={`pl-2 pr-10 mt-0.5 w-full border text-sm rounded h-8 border-gray-600 outline-none focus:ring-2 ring-yellow-400 ${error.password &&
              "ring-2 ring-red-600"}`}
            type={showPW ? "text" : "password"}
            name="password"
          />
          {showPW ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 absolute right-2 top-1.5"
              onClick={() => setShowPW(false)}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 absolute right-2 top-1.5"
              onClick={() => setShowPW(true)}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
              />
            </svg>
          )}
          {error.password && (
            <p className="absolute text-xs text-red-600 pt-0.5">
              {error.password}
            </p>
          )}
        </div>

        <p
          onClick={() => signIn()}
          className="w-full h-8 my-6 bg-yellow-300 border border-gray-800 rounded flex justify-center items-center text-xs cursor-pointer hover:shadow-md"
        >
          Continue
        </p>
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
      </div>

      <p className="text-xs text-gray-500 pt-6 pb-4">New to Amazon?</p>
      <p
        onClick={() => router.push("/profile/signUp")}
        className="h-8 w-96 bg-gray-100 border border-gray-800 rounded flex justify-center items-center text-xs cursor-pointer hover:shadow-md"
      >
        Create your Amazon accont
      </p>
    </div>
  );
};

export default SignIn;
