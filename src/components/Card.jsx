import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="max-w-xl h-70 rounded overflow-hidden shadow-lg bg-pink-50 flex flex-col gap-y-5"> 
      <div className="flex flex-col gap-y-3">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <button className="text-black px-4 py-2 rounded-full">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
