// Refactoring changes made:
// 1. Simplified imports by using destructured imports from Material-UI
// 2. Replaced Material-UI icons with Lucide icons for a more modern look
// 3. Moved the API call into a separate async function within useEffect
// 4. Consolidated report modal state and functions
// 5. Improved layout and styling using Tailwind CSS classes
// 6. Enhanced nutrition information display with a highlighted box and grid layout
// 7. Used Lucide icons to improve visual representation of dish attributes
// 8. Simplified conditional rendering logic for loading, error, and no dish states
// 9. Kept SweetAlert functionality for user notifications

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import { AlertCircle, DollarSign, Scale, Apple, Utensils } from "lucide-react";
import Swal from "sweetalert2";

const DishDetails = () => {
  const { dishId } = useParams();
  const [dish, setDish] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [reportReason, setReportReason] = useState("");

  useEffect(() => {
    const fetchDish = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/dishes/${dishId}`
        );
        setDish(response.data);
        setLoading(false);
      } catch (error) {
        console.error(
          "Error fetching dish details:",
          error.response || error.message || error
        );
        setError("There was an error fetching the dish details!");
        setLoading(false);
      }
    };

    fetchDish();
  }, [dishId]);

  const handleReportSubmit = async () => {
    if (!reportReason.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Reason required",
        text: "Please provide a reason for reporting this recipe.",
      });
      return;
    }

    try {
      await axios.post(
        `http://localhost:3000/api/reports/${dishId}`,
        { reportableType: "Dish", reason: reportReason },
        { withCredentials: true }
      );
      Swal.fire({
        icon: "success",
        title: "Report Submitted",
        text: "Thank you for reporting this recipe. We'll review it shortly",
      });
      setIsReportModalOpen(false);
      setReportReason("");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed to submit report",
        text: "There was an error submitting your report. Please try again.",
      });
    }
  };

  if (loading) return <p className="text-center p-4">Loading...</p>;
  if (error) return <p className="text-center p-4 text-red-500">{error}</p>;
  if (!dish) return <p className="text-center p-4">No dish found.</p>;

  return (
    <div className="max-w-2xl mx-auto p-4 w-[92rem]">
      <div className="flex justify-end mb-4">
        <IconButton
          onClick={() => setIsReportModalOpen(true)}
          aria-label="report"
        >
          <AlertCircle className="text-red-500" />
        </IconButton>
      </div>

      <Card className="overflow-hidden shadow-lg">
        {dish.photos && dish.photos.length > 0 && (
          <CardMedia
            component="img"
            height="350"
            image={dish.photos[0]}
            alt={dish.name}
            className="w-full object-cover"
          />
        )}
        <CardContent className="p-6">
          <Typography variant="h4" className="font-bold mb-2">
            {dish.name}
          </Typography>
          <div className="flex items-center space-x-2 mb-4">
            <DollarSign className="text-green-600" />
            <Typography variant="h5">{dish.price.toFixed(2)}</Typography>
          </div>
          <Typography variant="body2" className="text-gray-600 mb-4">
            {dish.description}
          </Typography>

          {dish.nutrition && (
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <Typography variant="h6" className="font-semibold mb-2">
                Nutrition Facts
              </Typography>
              <div className="grid grid-cols-2 gap-2">
                <div>Calories: {dish.nutrition.calories}</div>
                <div>Protein: {dish.nutrition.protein}g</div>
                <div>Total Fats: {dish.nutrition.totalFats}g</div>
                <div>Carbs: {dish.nutrition.carbs}g</div>
              </div>
            </div>
          )}

          {dish.availableQuantity && (
            <Typography variant="body2" className="flex items-center mb-2">
              <Scale className="mr-2" /> Available: {dish.availableQuantity}
            </Typography>
          )}
          {dish.dietaryRestrictions && (
            <Typography variant="body2" className="flex items-center mb-2">
              <Apple className="mr-2" /> {dish.dietaryRestrictions.join(", ")}
            </Typography>
          )}
          {dish.cuisineType && (
            <Typography variant="body2" className="flex items-center mb-2">
              <Utensils className="mr-2" /> {dish.cuisineType} Cuisine
            </Typography>
          )}
        </CardContent>
      </Card>

      {isReportModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-red-500">
              Report Recipe
            </h2>
            <label className="block text-lg mb-2 text-gray-700">
              Reason for reporting:
            </label>
            <textarea
              value={reportReason}
              onChange={(e) => setReportReason(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
              rows="4"
              placeholder="Enter the reason for reporting"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsReportModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleReportSubmit}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Submit Report
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DishDetails;
