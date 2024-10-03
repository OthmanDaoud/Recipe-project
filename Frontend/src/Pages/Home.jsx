import React, { useState, useEffect } from "react";
import Salad1 from "../imgs/Group 18.png";
import bg from "../imgs/bg.jpeg";
import dish1 from "../imgs/dish1.png";
import dish2 from "../imgs/dish2.png";
import dish3 from "../imgs/dish3.png";
import dish4 from "../imgs/dish4.png";
import axios from "axios";
import { Link } from "react-router-dom";
import AdaptedRecipeCard from "@/Components/AdaptedRecipeCard";
import { useNavigate } from "react-router-dom";
////////////////////////
import { Clock, Users, Salad, Heart } from "lucide-react"; // Ensure icons are imported correctly
////////////////////////

function Home() {
  return (
    <div className="justify-center content-center self-center origin-center place-items-center">
      <HeroSection />
      <Features />
      <CategoriesSection />
      <AboutUsSection />
      <WhyChooseUs />
      <MissionStatement />
      <TopRatedRecipes />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 align-middle p-4 mx-32 sm:p-8 md:p-12 rounded-3xl items-center min-h-screen ">
      <div className=" flex flex-col gap-12 ">
        <div className="flex flex-col gap-6">
          <div className="text-6xl font-bold ">
            Enjoy Healthy Life & <br />
            Testy Food.
          </div>
          <div className="text-xl text-slate-700">
            Discover more than{" "}
            <span className="text-green-700">1000 recipes</span> in your hand
            with the best recipe. Help you to find the easiest way to cook.
          </div>
        </div>
        <div className="flex gap-2">
          <Link
            to="/catalogRecipe"
            className="mt-4 lg:mt-0 lg:ml-6 bg-green-600 text-white px-4 py-2 rounded-xl font-bold shadow-md hover:bg-green-700 transition-colors duration-200"
          >
            Expolre Recipes
          </Link>
          <Link
            to="/chefs"
            className="mt-4 lg:mt-0 lg:ml-6 bg-green-600 text-white px-4 py-2 rounded-xl font-bold shadow-md hover:bg-green-700 transition-colors duration-200"
          >
            Order Dish
          </Link>
        </div>
      </div>
      <div className="">
        <img src={Salad1} alt="My Image" className="h-full" />
      </div>
    </div>
  );
}

function Features() {
  const featuresData = {
    features: [
      {
        title: "Nutrition Facts",
        description: "Get detailed nutrition info for every recipe and dish.",
        img: dish1,
      },
      {
        title: "Multi-Cuisine Variety",
        description: "Explore a range of global recipes and dishes.",
        img: dish2,
      },
      {
        title: "Recipes & Ready-Made Dishes",
        description: "Enjoy both recipes and freshly prepared meals.",
        img: dish3,
      },
      {
        title: "Visual Recipe Guides",
        description: "Follow easy, step-by-step guides with images and videos.",
        img: dish4,
      },
    ],
  };
  return (
    <section className="px-44 py-24  text-center bg-green-50">
      <h2 className="text-2xl font-semibold mb-8 text-green-600">
        Our Features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center origin-center content-center place-self-center gap-6">
        {featuresData.features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-50 border rounded-2xl shadow-lg p-6 w-full max-w-xs hover:bg-green-600 hover:text-white"
          >
            <img src={feature.img} alt={feature.title} />
            <h3 className="text-md font-semibold mb-4">{feature.title}</h3>
            <p className="text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CategoriesSection() {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:3000/api/recipe/getCategories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section className="px-44 py-24 text-center">
      <h2 className="text-2xl font-semibold mb-8 text-green-600">
        {" "}
        Our Main Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center origin-center content-center place-self-center gap-6">
        {categories.slice(0, 4).map((category) => (
          <div
            key={category.name}
            className="bg-gray-50 border rounded-2xl shadow-lg p-6 w-full max-w-xs hover:bg-green-600 hover:text-white"
          >
            <h3 className="text-md font-semibold mb-4">{category.name}</h3>
            <p className="text-sm">{category.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutUsSection() {
  const navigate = useNavigate();
  return (
    // <div className="relative  ">
    //   <img
    //     src={bg}
    //     alt="Pasta salad with tomatoes and herbs"
    //     className="w-full h-96 object-cover"
    //   />
    //   <div className="absolute top-4 left-4 bg-white text-green-700 py-1 px-3 rounded-full text-sm font-semibold">
    //     50+ Quick Food Recipes That Easy To Do!
    //   </div>
    //   <div className="absolute inset-0 flex items-center justify-center">
    //     <div className="bg-white p-6 rounded-lg max-w-md mx-4 shadow-lg">
    //       <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
    //       <p className="text-sm mb-6 text-center">
    //         Our recipes are the heart and soul of our culinary community, and
    //         they reflect our commitment to providing you with memorable and
    //         delightful dining experiences.
    //       </p>
    //       <div className="text-center">
    //         <button className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300 text-lg font-semibold">
    //           Learn More
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div
      className="relative h-96  bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute top-4 left-4 bg-white text-green-700 py-1 px-3 rounded-full text-sm font-semibold">
        50+ Quick Food Recipes That Easy To Do!
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        {/* <div className="bg-white p-6 rounded-lg max-w-md mx-4 shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-center text-green-600">
            About Us
          </h2>
          <p className="text-sm mb-6 text-center">
            Our recipes are the heart and soul of our culinary community, and
            they reflect our commitment to providing you with memorable and
            delightful dining experiences.
          </p>
          <div className="text-center">
            <button className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300 text-lg font-semibold">
              Learn More
            </button>
          </div>
        </div> */}

        <div className="bg-white p-6 rounded-lg max-w-md mx-4 shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-3xl font-bold mb-4 text-center text-green-600 transition-colors duration-300">
            About Us
          </h2>
          <p className="text-sm mb-6 text-center">
            Our recipes are the heart and soul of our culinary community, and
            they reflect our commitment to providing you with memorable and
            delightful dining experiences.
          </p>
          <div className="text-center">
            <button
              className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300 transform hover:scale-110"
              onClick={() => {
                navigate("/about");
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function WhyChooseUs() {
  const reasons = [
    {
      title: "Fresh Ingredients",
      description:
        "We use only the freshest, seasonal ingredients in our recipes.",
      icon: "🥬",
    },
    {
      title: "Easy Recipes",
      description:
        "Our recipes are simple and accessible for cooks of all levels.",
      icon: "👨‍🍳",
    },
    {
      title: "Creative Combinations",
      description: "Discover unique salad ideas you won't find anywhere else.",
      icon: "🥗",
    },
    {
      title: "Dietary Options",
      description:
        "We cater to various dietary needs, including vegan and gluten-free.",
      icon: "🌱",
    },
  ];

  return (
    <section className="py-16 bg-green-50 px-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-8 text-green-600 flex justify-center">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MissionStatement() {
  return (
    <section className="py-16 bg-green-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-xl max-w-3xl mx-auto leading-relaxed">
          We are committed to inspiring healthier lifestyles through delicious
          and nutritious salads. Our goal is to make healthy eating accessible,
          enjoyable, and exciting for everyone, one salad at a time.
        </p>
        <div className="mt-8"></div>
      </div>
    </section>
  );
}

const TopRatedRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchTopRatedRecipes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/reviews/top-rated-recipes"
        );
        if (response.data.success) {
          setRecipes(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching top-rated recipes:", error);
      }
    };

    fetchTopRatedRecipes();
  }, []);

  return (
    <section className="sm:px-3 lg:px-44 py-24 text-center flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-semibold">
          Discover Our Top-Rated Recipes
        </h2>
        <h2 className="text-md font-normal mb-8">
          Indicates that these recipes have been highly rated by users.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <AdaptedRecipeCard key={recipe.recipeId} recipe={recipe} />
          ))}
        </div>
      </div>
      <div className="flex justify-start">
        <Link
          to="/catalogRecipe"
          className="mt-4 lg:mt-0 lg:ml-6 bg-green-600 text-white px-4 py-2 rounded-xl font-bold shadow-md hover:bg-green-700 transition-colors duration-200"
        >
          View All Recipes
        </Link>
      </div>
    </section>
  );
};
export default Home;
