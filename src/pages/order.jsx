import React from "react";
import { useState } from "react";

const Order = () => {
  const [joke, setjoke] = useState(false);
  const toggle = () => {
    setjoke(!joke);
  };
  return (
    <div class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg text-center">
        <div class="mb-4">
          <h2 class="text-xl font-bold">
            What is the username of the fastest criminal on the dark web?
          </h2>
          <p className={!joke ? "hidden" : "block"}><p className="text-xl">TORpedo</p></p>
          <button
            className="bg-black rounded-xl py-1 px-2 my-10 text-white"
            onClick={toggle}
          >
            click me{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
