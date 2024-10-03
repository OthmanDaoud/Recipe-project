import React from "react";
import { Link } from "react-router-dom";

function ChefCard({ chef }) {
  return (
    <div className="rounded overflow-hidden shadow-lg flex flex-col">
      <div className="relative">
        <img
          className="w-full h-96"
          src={chef.chefDisplayPicture}
          alt={`${chef.name}'s display`} // Correct string interpolation
        />
        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
      </div>

      <div className="px-6 py-4 mb-auto font-medium">
        {chef.name}
        <p className="text-gray-500 text-sm">{chef.bio}</p>
      </div>
      <div className="px-6 py-3 flex flex-row items-center justify-end bg-gray-100">
        <Link to={`/dishes/${chef._id}`}>
          <button className="font-bold text-green-600">View</button>
        </Link>
      </div>
    </div>
  );
}

export default ChefCard;
