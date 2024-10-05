import { useState, useContext, useEffect } from "react";
import home_data from "../data/home_data.json";

import "../App.css";
import "../App_2.css";
import "../App_3.css";
import "../App_4.css";
import "../App_5.css";
import "../index.css";
import "../components/user_data_css/user_data_css.css"
import "./dashboardcss/dashboardcss.css"

import Gridbar from "../components/gridbar";
import User_Data_table from "../components/user_data_table";



function Dashboard() {
  return (
    <>
      <div className="main-content bg-orange-600 mt-32 ml-0 lg:ml-72 w-full lg:w-[80%] px-4 sm:px-8 lg:px-16">
        <div className="flex justify-center flex-wrap gap-4 sm:text-lg lg:text-xl xl:text-3xl">
        
          {home_data.map((data, index) => {
            return <Gridbar key={index} name={data} />;
          })}
        </div>

        <div className="flex flex-col lg:flex-row mt-8">
          
          <div className="w-full lg:w-7/12 mr-0 lg:mr-16 mb-8 lg:mb-0">
            <User_Data_table name="h-80" />
          </div>

          
          <div className="bg-gray-700 w-full lg:w-80 h-96 hidden lg:block"></div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
