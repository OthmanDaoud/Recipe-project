import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import RecipeDetailsPage from "./Pages/Resipe";
import CatalogPage from "./Pages/CatalogRecipePage";
import Signup from "./Pages/SignUp/SignUp";
import Login from "./Pages/LogIn/LogIn";
import Chefs from "./Pages/Chefs";
import DishesPage from "./Pages/DishesPage";
import DishDetails from "./Pages/DishDetails";
import Dashboard from "./Pages/Dashboard/adminDashboard";
import ContactUs from "./Pages/ContactUs";

//abdalla
import DishCreationForm from "./Pages/chef/a/creatDishes";
import RecipeFormCreat from "./Pages/chef/a/creatRecipe";
import RecipesList from "./Pages/chef/a/RecipesList";
import EditRecipe from "./Pages/chef/a/EditRecipe";
import DishList from "./Pages/chef/a/DishList";
import EditDishForm from "./Pages/chef/a/EditDishForm";
import UserProfile from "./Pages/Profile/UserProfile";
import ChefRequestForm from "./Pages/ChefRequest/ChefRequestForm";
import Navbar from "./Components/Navbar";
import ChefProfilePage from "./Pages/chef/a/chefProfile";
import AboutUs from "./Pages/AboutUs";
// context
import { CartProvider } from "./Context/CartContext";
import Footer from "./Components/Footer";

const stripePromise = loadStripe(
  "pk_test_51Pw80BJRahph5cPnnWJHe2W1SGzMNmOEOzgML0L7tE61gOQjJCgdNkRl6hEGWSVBPy7UUkXYpuDoFmqh6qQEv6Cj00Isc9BnRU"
);

function App() {
  return (
    <>
      <Elements stripe={stripePromise}>
        <BrowserRouter>
          <CartProvider>
            <Content />
          </CartProvider>
        </BrowserRouter>
      </Elements>
    </>
  );
}

function Content() {
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  return (
    <>
      {/* Conditionally render Navbar */}
      {!isDashboardRoute && <Navbar />}
      <Routes>
        <Route path="/recipe/:recipeId" element={<RecipeDetailsPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/catalogRecipe" element={<CatalogPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dishesCreat" element={<DishCreationForm />} />
        <Route path="/creatRecipe" element={<RecipeFormCreat />} />
        <Route path="/recipeLists" element={<RecipesList />} />
        <Route path="/edit-recipe/:id" element={<EditRecipe />} />
        <Route path="/dishList" element={<DishList />} />
        <Route path="/edit-dish/:id" element={<EditDishForm />} />
        <Route path="/chefs" element={<Chefs />} />
        <Route path="/dishes/:chefId" element={<DishesPage />} />
        <Route path="Dish-details/:dishId" element={<DishDetails />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/chef-request" element={<ChefRequestForm />} />
        <Route path="/profileChef" element={<ChefProfilePage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      {/* Conditionally render Footer */}
      {!isDashboardRoute && <Footer />}
    </>
  );
}

export default App;
