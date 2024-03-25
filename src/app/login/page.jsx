"use client";
import React, { useContext, useState } from "react";

import { app } from "../firebase/firebase.init";
import { CartContext } from "../Context/Context";

const Login = () => {
  const { handleGoogleSign, user, handleSingOut } = useContext(CartContext);
  const { photoURL, displayName } = user;
  return (
    <div className="h-screen px-24 py-8 flex justify-center ">
      <div className="flex flex-col items-center gap-4 mt-24 ">
        <div>
          {" "}
          <img src={photoURL} alt="" />
          <h2>user {displayName}</h2>
        </div>
        <button
          className="bg-red-500 text-white px-3 py-2 text-2xl "
          onClick={handleGoogleSign}>
          Google Sign In
        </button>
        <button
          className="bg-red-500 text-white px-3 py-2 text-2xl"
          onClick={handleSingOut}>
          Google Sign out
        </button>
      </div>
    </div>
  );
};

export default Login;