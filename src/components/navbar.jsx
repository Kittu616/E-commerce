import React, { useContext } from "react";
import logo from "../assets/logo_compressed.webp";

import "../components/navbarcss/navbarcss.css";

const Navbar = (params) => {
  return (
    <>
      <div
        className="navbar flex fixed w-[100%] lg:w-[83%] -top-1 lg:top-0 bg-white lg:justify-between
       py-2 lg:py-6 px-11 
       lg:ml-64 my-1 lg:my-0 
       z-50"
      >
        <p className="text-green-500 text-center lg:pt-4 w-[50%] text-2xl lg:text-4xl font-mono cursor-default">
          {params.value}
        </p>
        <img
          src={logo}
          alt="logo"
          className=" fixed right-[2vw] w-[80px]  lg:w-[120px] lg:ml-0"
        />
      </div>
    </>
  );
};

export default Navbar;
