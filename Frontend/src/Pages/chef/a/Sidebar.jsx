// Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Menu</h2>
        <nav>
          <Link to="/profileChef" className="block py-2 hover:bg-gray-200">
            Profile
          </Link>
          <Link to="/creatRecipe" className="block py-2 hover:bg-gray-200">
            Create Recipe
          </Link>
          <Link to="/dishesCreat" className="block py-2 hover:bg-gray-200">
            Create Dish
          </Link>
          <Link to="/dishList" className="block py-2 hover:bg-gray-200">
            Dish List
          </Link>
          <Link to="/recipeLists" className="block py-2 hover:bg-gray-200">
            Recipe List
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
