// AdaptedRecipeCard.jsx
import React from "react";
import RecipeCard from "../Components/RecipeCard"; // Import the original RecipeCard component

const AdaptedRecipeCard = ({ recipe }) => {
  // Map API response data to the format expected by RecipeCard
  const adaptedRecipe = {
    _id: recipe.recipeId,
    photos: recipe.photos,
    title: recipe.title || "", // Set title if available
    description: recipe.description,
    cookingTime: recipe.cookingTime,
    cuisineType: recipe.cuisineType,
    servings: recipe.servings,
  };

  return <RecipeCard recipe={adaptedRecipe} />;
};

export default AdaptedRecipeCard;
