import React from "react";
import { useState } from "react";

const Analytics = () => {
  const [joke, setjoke] = useState(false);
  const toggle = () => {
    setjoke(!joke);
  };
  return (
    <div class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg text-center">
        <div class="mb-4">
          <h2 class="text-xl font-bold">I am lazy and exhausted @_@</h2>
          <p className="m-3">
            Designs and stuff is something completely out of my skillset, So
            gonna deploy and ask for your suggestions.
            <p className="text-xl italic">Peace out</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
