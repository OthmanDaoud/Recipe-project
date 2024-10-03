import React, { useState, useEffect } from "react";
import axios from "axios";
import DishCard from "../Components/DishCard";
import CheckoutCard from "../Components/CheckoutCard";
import DishDetailsPopup from "../Components/DishDetailsPopup";
import { useParams } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import useGetData from "../Hooks/useGetData"; // Import your custom hook

function DishesPage() {
  const { chefId } = useParams();

  // Fetch dishes and chef details using the custom hook
  const {
    data: dishes,
    loading: dishesLoading,
    error: dishesError,
  } = useGetData(`http://localhost:3000/api/dishes/chef/${chefId}`);

  const {
    data: chef,
    loading: chefLoading,
    error: chefError,
  } = useGetData(`http://localhost:3000/api/users/chef/${chefId}`);

  const [selectedDish, setSelectedDish] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { setChefId } = useCart();

  // Set the chefId in the cart context
  useEffect(() => {
    setChefId(chefId);
  }, [chefId, setChefId]);

  const openDetailsPopup = (dish) => {
    setSelectedDish(dish);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedDish(null);
  };

  // Show loading state if either dishes or chef data is still loading
  if (dishesLoading || chefLoading) {
    return <p>Loading...</p>;
  }

  // Check for errors in fetching chef data
  if (chefError) {
    return <p>Error loading chef data. Please try again later.</p>;
  }

  return (
    <div className="flex">
      <div className="w-3/4 p-5 sm:p-10 md:p-16 sm:pl-3 md:pl-20 lg:pl-64">
        <div className="border-b mb-5 flex justify-between text-sm">
          <div className="text-green-600 flex items-center pb-2 pr-2 border-b-2 border-green-600 uppercase">
            Dishes by {chef?.name} {/* Display chef's name */}
          </div>
        </div>

        {/* Chef details */}
        <div className="mb-5 bg-green-100 rounded-lg p-8 flex ">
          <div>
            <p className="font-bold text-lg text-green-950 ">{chef?.name}</p>
            <h2 className="text-green-800">{chef?.bio}</h2>
            <p className=" pt-4 text-green-500">
              <span className="font-bold">{dishes?.length || 0} </span>
              Dishes
            </p>
          </div>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {dishes && dishes.length > 0 ? (
            dishes.map((dish) => (
              <DishCard
                key={dish._id}
                dish={dish}
                openDetailsPopup={openDetailsPopup}
              />
            ))
          ) : (
            <p>The chef does not have any dishes.</p>
          )}
        </div>
      </div>

      {/* Checkout Card */}
      <div className="w-1/4">
        <CheckoutCard />
      </div>

      {/* Dish Details Popup */}
      {isPopupOpen && (
        <DishDetailsPopup dish={selectedDish} onClose={closePopup} />
      )}
    </div>
  );
}

export default DishesPage;
