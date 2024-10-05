import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Popup from "reactjs-popup";

import Navbar from "./navbar";
import Setting from "./setting";

import "./sidebarcss/sidebarcss.css";

const Sidebar = () => {
  const [Title1, setTitle1] = useState("Dashboard");

  const handleTitleChange = (title) => {
    setTitle1(title);
  };

  return (
    <>
      <Navbar value={Title1} />

      <div className="bg-black fixed -left-4 mt-0 lg:mb-auto lg:mt-0 lg:rounded-ss-3xl lg:left-0 top-12 lg:top-0 w-[105%] lg:w-[20vw] overflow-y-scroll cursor-default z-50">
        <div
          className=" flex lg:flex-col h-fit lg:h-[100vh] lg:pt-32 px-7 lg:p-6 lg:m-4 gap-2"
          style={{ fontFamily: "Roboto Slab" }}
        >
          <NavLink
            className="cursor-default"
            to="/dashboard"
            onClick={() => handleTitleChange("Dashboard")}
          >
            <div
              tabIndex={0}
              className="text-white flex gap-4 p-2 w-full border-2 border-black rounded-xl
              focus:outline-none lg:focus:ring-4 lg:focus:ring-red-500 lg:hover:border-red-500
              duration-1000 lg:duration-300"
            >
              <span className="material-icons hidden lg:block">dashboard</span>
              <p>Dashboard</p>
            </div>
          </NavLink>

          <NavLink className="cursor-default" to="Order">
            <div
              tabIndex={0}
              className="text-white flex gap-4 p-2 w-full border-2 border-black rounded-xl
              focus:outline-none lg:focus:ring-4 lg:focus:ring-red-500 lg:hover:border-red-500
              duration-1000 lg:duration-300"
              onClick={() => handleTitleChange("Order")}
            >
              <span className="material-icons hidden lg:block">assignment</span>
              <p>Order</p>
            </div>
          </NavLink>

          <NavLink className="cursor-default" to="Products">
            <div
              tabIndex={0}
              className="text-white flex gap-4 p-2 w-full border-2 border-black rounded-xl
              focus:outline-none lg:focus:ring-4 lg:focus:ring-red-500 lg:hover:border-red-500
              duration-1000 lg:duration-300"
              onClick={() => handleTitleChange("Products")}
            >
              <span className="material-icons hidden lg:block">category</span>
              <p>Products</p>
            </div>
          </NavLink>

          <NavLink className="cursor-default" to="Customers">
            <div
              tabIndex={0}
              className="text-white flex gap-4 p-2 w-full border-2 border-black rounded-xl
              focus:outline-none lg:focus:ring-4 lg:focus:ring-red-500 lg:hover:border-red-500
              duration-1000 lg:duration-300"
              onClick={() => handleTitleChange("Customers")}
            >
              <span className="material-icons hidden lg:block">people</span>
              <p>Customers</p>
            </div>
          </NavLink>

          <NavLink className="cursor-default" to="Analytics">
            <div
              tabIndex={0}
              className="text-white flex gap-4 p-2 w-full border-2 border-black rounded-xl
              focus:outline-none lg:focus:ring-4 lg:focus:ring-red-500 lg:hover:border-red-500
              duration-1000 lg:duration-300"
              onClick={() => handleTitleChange("Analytics")}
            >
              <span className="material-icons hidden lg:block">bar_chart</span>
              <p>Analytics</p>
            </div>
          </NavLink>
          <Popup
            trigger={
              <div
                tabIndex={0}
                className="text-white flex gap-4 p-2 w-full border-2 border-black rounded-xl
      focus:outline-none lg:focus:ring-4 lg:focus:ring-red-500 lg:hover:border-red-500
      duration-300"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="material-icons hidden lg:block">settings</span>
                <p>Settings</p>
              </div>
            }
            position={"right center"}
          >
            <Setting />
          </Popup>

          <NavLink className="cursor-default" to="/logout">
            <div
              tabIndex={0}
              className="text-red-500 flex gap-4 p-2 w-full border-2 border-black rounded-xl
              focus:outline-none lg:focus:ring-4 lg:focus:ring-red-500 lg:hover:border-red-500
              duration-300"
              onClick={() => handleTitleChange("LogOut")}
            >
              <span className="material-icons hidden lg:block">logout</span>
              <p>LogOut</p>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
