import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 ">
      <section className="relative  bg-gray-100 flex mx-24 mt-12">
        <div>
          <img
            src="https://abeautifulmess.com/wp-content/uploads/2023/04/Fruit-Salad-Recipe.jpg"
            alt=""
          />
        </div>
        <div className="max-w-4xl mx-auto p-6 bg-green-50  shadow-lg pl-4">
          <h2 className="text-4xl font-bold text-green-600 mb-6 text-center">
            Our Story
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Welcome to{" "}
            <span className="text-green-600 text-xl font-bold">
              {" "}
              Salad Space!
            </span>{" "}
            Our journey began with a simple idea: to make salads fun, creative,
            and accessible to everyone. We believe that eating healthy doesn't
            have to be boring or difficult. Our mission is to bring you fresh,
            delicious, and nutritious salads that you can enjoy any day of the
            week.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            It all started with a passion for fresh ingredients and a love for
            vibrant flavors. What began as a small local initiative has grown
            into a thriving community of salad enthusiasts. We take pride in
            sourcing the highest quality ingredients and crafting recipes that
            not only taste amazing but also support a healthier lifestyle.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our commitment goes beyond just providing great salads. We aim to
            inspire our customers to embrace a lifestyle of health and wellness.
            Whether you're looking for a quick lunch, a hearty dinner, or a
            refreshing snack, Salad Space has something for everyone. Join us on
            this journey and discover the joy of healthy eating!
          </p>
          <p className="text-lg text-gray-700">
            Thank you for being part of our story. We look forward to serving
            you and sharing our passion for salads with you every day.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-green-600 mb-6 text-center">
            Our Mission & Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="transition-transform transform hover:scale-105 bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-green-600 mb-3">
                Our Mission
              </h3>
              <p className="text-gray-700">
                To inspire people to enjoy healthy eating habits through the art
                of making delicious salads with the freshest ingredients.
              </p>
            </div>
            <div className="transition-transform transform hover:scale-105 bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-green-600 mb-3">
                Our Vision
              </h3>
              <p className="text-gray-700">
                We envision a world where healthy eating is a joyful experience,
                where salads are not just a side dish but the star of the meal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Chefs Section */}

      {/* What We Offer Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-green-600 mb-6 text-center">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="transition-transform transform hover:scale-105 bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-green-600 mb-3">
                Fresh Salad Recipes
              </h3>
              <p className="text-gray-700">
                Discover a wide range of salad recipes that are perfect for any
                occasion, from quick lunches to dinner parties.
              </p>
            </div>
            <div className="transition-transform transform hover:scale-105 bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-green-600 mb-3">
                Expert Chefs
              </h3>
              <p className="text-gray-700">
                Our talented chefs share their passion and expertise, ensuring
                each recipe is crafted with care.
              </p>
            </div>
            <div className="transition-transform transform hover:scale-105 bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-green-600 mb-3">
                Order Your Favorite Dishes
              </h3>
              <p className="text-gray-700">
                Not in the mood to cook? You can order delicious salad dishes
                directly from our website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Join Our Salad Revolution!
          </h2>
          <p className="text-lg text-white mb-6">
            Experience the best of healthy eating by joining our community.
            Whether you're looking to explore new recipes or buy your favorite
            dishes, Salad Space has you covered.
          </p>
          <button className="bg-white text-green-600 py-3 px-8 rounded-lg text-lg font-semibold hover:bg-green-500 transition duration-300">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
