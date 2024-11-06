// eslint-disable-next-line no-unused-vars
import React from 'react';

const PrincipleMsg = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-100 p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-md w-full sm:max-w-lg">
        <img
          src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png" // Replace with actual path to the principal's image
          alt="Principal"
          className="w-full h-72 object-cover"
        />
        <div className="p-6 text-center">
          <h2 className="text-lg font-semibold text-red-600 mb-2">
          name
          </h2>
          <p className="text-gray-600 text-sm">Principal</p>
          <p className="mt-4 text-gray-700 text-base">
            Education is the most powerful weapon which you can use to change the world.
            <br />
            - Nelson Mandela
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrincipleMsg;
