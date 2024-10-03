import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Salad Space</h3>
            <p className="text-sm">
              Discover delicious and healthy salad recipes for every occasion.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-green-200 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/catalogRecipe"
                  className="hover:text-green-200 transition-colors duration-200"
                >
                  Recipes
                </Link>
              </li>
              <li>
                <Link
                  to="/chefs"
                  className="hover:text-green-200 transition-colors duration-200"
                >
                  Our Chefs
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-green-200 transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-green-200 transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-green-200 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-green-200 transition-colors duration-200"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="hover:text-green-200 transition-colors duration-200"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="hover:text-green-200 transition-colors duration-200"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="hover:text-green-200 transition-colors duration-200"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span>o.daoued@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span>+962 780 848 097</span>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>Zarqa, Jordan</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-500 text-center">
          <p>
            &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
