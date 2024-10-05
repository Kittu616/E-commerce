import React from "react";
import "./gridbarcss/gridbarcss.css"

const Gridbar = ({ name }) => {
  return (
    <>
      <div className="block w-32 h-28 mt-5  lg:mx-7 sm:w-40 sm:h-28 md:w-48 md:h-32 lg:w-64 lg:h-36 bg-red-500">
        <div className="grid grid-rows-4 grid-cols-4 pt-6">
          <div className="col-span-2 row-span-3 flex items-center justify-center">
            <div className="absolute -mt-7 lg:hover:-mt-10 duration-200 w-[70px] h-[80px] bg-black -ml-3 lg:-ml-5 flex items-center justify-center">
              <span className="material-icons text-white text-4xl sm:text-5xl lg:hover:-mt-2 md:text-6xl">
                {name.icon}
              </span>
            </div>
          </div>

          <div className="col-span-2 row-span-2 flex items-center border-b-2 text-sm ">
            {name.name}
          </div>

          <div className="col-span-2 row-span-2 text-xl sm:text-xl lg:text-2xl flex items-center">
            {name.count}
          </div>

          <div className="col-span-full row-span-1 mt-1 ml-3 border-t-2 text-xs sm:text-sm md:text-base">
            {name.desc}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gridbar;
