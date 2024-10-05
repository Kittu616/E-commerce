import React from "react";
import "./logoutcss/logoutcss.css";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigation = useNavigate();

  const gotologin = () => {
    localStorage.clear();
    navigation("/");
  };

  return (
    <div className="flex flex-col justify-center items-center absolute w-full h-[40vh] lg:w-[80%] lg:h-[70vh] top-28 lg:left-[60vw] transform lg:-translate-x-1/2 px-5 lg:px-10">
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
        allow="autoplay; encrypted-media"
        className="w-full h-[200px] lg:h-[50vh] mb-10 bg-red-100" 
      ></iframe>
      <p className="flex flex-col items-center w-full lg:w-1/2 text-base p-1">
        <div>Sorry about this lol</div>
        <button
          onClick={gotologin}
          className="p-2 m-2 bg-black text-white hover:bg-stone-800 outline-none"
        >
          to login page
        </button>
      </p>
    </div>
  );
};

export default Logout;
