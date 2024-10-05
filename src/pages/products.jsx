import React from 'react'
import { useState } from 'react';

const Products = () => {
  const [joke, setjoke] = useState(false);
  const toggle = () => {
    setjoke(!joke);
  };
  return (
    <div class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg text-center">
        <div class="mb-4">
          <h2 class="text-xl font-bold">
          Puns about poop are not my favorite.
          </h2>
          <p className="mt-10 text-xl">However, they're a solid #2.</p>
        </div>
      </div>
    </div>
  );
}

export default Products