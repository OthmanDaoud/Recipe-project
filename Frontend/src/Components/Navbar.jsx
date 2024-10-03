import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    console.log("token in navbar: ", token);
    setIsLoggedIn(!!token);
    const checkScreenSize = () => {
      setIsMediumScreen(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("user_id");
    setIsLoggedIn(false);
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="lg:flex justify-between items-center container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-green-600">
            Salad Space
          </Link>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        <nav
          className={`lg:flex items-center ${
            isMenuOpen ? "block" : "hidden"
          } w-full lg:w-auto mt-4 lg:mt-0`}
        >
          <ul
            className={`lg:flex lg:space-x-6 ${
              isMediumScreen ? "flex flex-col space-y-2" : ""
            }`}
          >
            {[
              { name: "Home", path: "/" },
              { name: "Recipes", path: "/catalogRecipe" },
              { name: "Our Chefs", path: "/chefs" },
              { name: "About", path: "/about" },
              // { name: "Services", path: "/services" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="block px-3 py-2 text-black hover:text-green-600 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            {isLoggedIn && (
              <li>
                <Link
                  to="/profile"
                  className="block px-3 py-2 text-black hover:text-green-600 transition-colors duration-200"
                >
                  Profile
                </Link>
              </li>
            )}
          </ul>
          <div
            className={`mt-4 ${
              isMediumScreen ? "flex justify-center" : "lg:mt-0 lg:ml-6"
            }`}
          >
            {isLoggedIn ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-xl font-bold shadow-md hover:bg-red-600 transition-colors duration-200"
              >
                Log out
                {console.log("isLoggedIn : ", isLoggedIn)}
              </motion.button>
            ) : (
              <Link
                to="/signup"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-xl font-bold shadow-md hover:bg-green-700 transition-colors duration-200"
              >
                Sign up
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
