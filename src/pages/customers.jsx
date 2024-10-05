import React from "react";
import { useState } from "react";

const Customers = () => {
  const [joke, setjoke] = useState(false);
  const toggle = () => {
    setjoke(!joke);
  };
  return (
    <div class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg text-center">
        <div class="mb-4">
          <h2 class="text-xl font-bold">
          My wife just gave birth to triplets named Eenie, Meenie, and Miney.
          </h2>
          <p className="mt-4">
          We didnt have any Moe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Customers;
