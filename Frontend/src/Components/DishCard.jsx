import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

function DishCard({ dish, openDetailsPopup }) {
  const { addToCart } = useCart();

  return (
    <div className="rounded overflow-hidden shadow-lg flex flex-col">
      <div className="relative">
        <img
          src={dish.photos[0]}
          alt={dish.name}
          className="w-full h-48 object-cover"
        />
        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
      </div>
      <div className="px-6 py-4 mb-auto font-medium">
        {dish.name}
        <p className="text-gray-500 text-sm">{dish.description}</p>
      </div>

      <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
        <button
          onClick={() => addToCart(dish)}
          className="bg-green-600 text-white py-1 px-3 rounded-lg hover:bg-green-700 transition duration-200"
        >
          Add to Cart
        </button>
        {/* <button
          onClick={() => openDetailsPopup(dish)}
          className=" text-green-600 font-bold py-1 px-3 rounded-lg hover:bg-green-100 transition duration-200"
        >
          View
        </button> */}
        <Link to={`/Dish-details/${dish._id}`}>
          <button className="font-bold text-green-600">View</button>
        </Link>
      </div>
    </div>
  );
}

export default DishCard;
