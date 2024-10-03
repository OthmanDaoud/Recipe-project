import React, { useEffect, useState } from "react";
import axios from "axios";
import ChefCard from "../Components/ChefCard";
import useRecipes from "../Hooks/useRecipes";
import useCategories from "../Hooks/useCategories";

function Chefs() {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/users/chefs")
      .then((response) => {
        setChefs(response.data.chefs);
      })
      .catch((error) => {
        console.error("There was an error fetching the chefs data!", error);
      });
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("");
  const { loading: recipesLoading, error: recipesError } =
    useRecipes(selectedCategory);
  const {
    categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useCategories();

  if (recipesLoading || categoriesLoading) return <p>Loading...</p>;
  if (recipesError || categoriesError)
    return <p>Error: {recipesError?.message || categoriesError?.message}</p>;

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="border-b mb-5 flex justify-between text-sm">
        <div className="text-green-600 flex items-center pb-2 pr-2 border-b-2 border-green-600 uppercase">
          Our Chefs{" "}
        </div>
      </div>
      <div className="mb-5">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="border p-2 rounded"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {chefs.length > 0 ? (
          chefs.map((chef) => <ChefCard key={chef._id} chef={chef} />)
        ) : (
          <p className="text-center">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Chefs;
