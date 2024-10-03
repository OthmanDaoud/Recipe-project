import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";
import axios from "axios";

const ChefProfilePage = () => {
  const [chef, setChef] = useState(null);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchChefData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/chefs/profile",
          { withCredentials: true }
        );
        setChef(response.data);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching chef data:", error);
        setError("Failed to fetch chef data. Please try again later.");
      }
    };

    fetchChefData();
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    // For numeric fields, parse the value to a number
    setFormData((prevData) => ({
      ...prevData,
      [id]: id === "experience" ? parseInt(value) || "" : value,
    }));
  };

  const handleSaveClick = async () => {
    try {
      await axios.put("http://localhost:3000/api/chefs/update", formData, {
        withCredentials: true,
      });
      setChef(formData);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating chef data:", error);
      setError("Failed to update chef data. Please try again later.");
    }
  };

  if (error) {
    return <div className="text-center mt-8 text-red-600">{error}</div>;
  }

  if (!chef) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
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

      {/* Main content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Chef Profile</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center mb-6">
            {chef.profilePicture ? (
              <img
                src={chef.profilePicture}
                alt={chef.name}
                className="w-24 h-24 rounded-full mr-4"
              />
            ) : (
              <User className="w-24 h-24 text-gray-400 mr-4" />
            )}
            <div>
              <h2 className="text-2xl font-bold">{chef.name}</h2>
              <p className="text-gray-600">{chef.email}</p>
            </div>
          </div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name || ""}
                onChange={handleInputChange}
                readOnly={!isEditing}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email || ""}
                onChange={handleInputChange}
                readOnly={!isEditing}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="bio" className="block mb-1 font-medium">
                Bio
              </label>
              <textarea
                id="bio"
                value={formData.bio || ""}
                onChange={handleInputChange}
                readOnly={!isEditing}
                className="w-full p-2 border rounded"
                rows="3"
              ></textarea>
            </div>
            <div>
              <label htmlFor="experience" className="block mb-1 font-medium">
                Years of Experience
              </label>
              <input
                type="number"
                id="experience"
                value={formData.experience || ""}
                onChange={handleInputChange}
                readOnly={!isEditing}
                className="w-full p-2 border rounded"
              />
            </div>
          </form>
          <div className="mt-4">
            {!isEditing ? (
              <button
                onClick={handleEditClick}
                className="bg-blue-500 text-white p-2 rounded"
              >
                Edit
              </button>
            ) : (
              <button
                onClick={handleSaveClick}
                className="bg-green-500 text-white p-2 rounded"
              >
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefProfilePage;
