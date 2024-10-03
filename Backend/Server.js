require("dotenv").config();
const express = require("express");
const stripe = require("stripe")(
  "sk_test_51Pw80BJRahph5cPnxqckhr9uUnG5QoXzBXT1hEz5rleKx7gnB4EOwe213sZkITIN21TGXj3jrAy3hXv8TEHlj5By00QI33Fhd5"
);
const connectDB = require("./Config/db.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");

//payment
const paymentRoutes = require("./Routes/paymentTransactionRoutes.js");
const stripeRoutes = require("./Routes/stripeRoutes.js");

// require routes
const userRoutes = require("./Routes/userRoutes.js");
const contactRoutes = require("./Routes/contactRoutes.js");
const reviewRoutes = require("./Routes/reviewRoutes.js");
const reportRoutes = require("./Routes/reportRoutes.js");
//abdalla

const creatRecioeRoutes = require("./Routes/createRecipeRoutes.js");
const creatDishesRoutes = require("./Routes/createDishRoutes.js");
const chefRequestRoutes = require("./Routes/chefRequestRoutes.js");
const categoryRoutes = require("./Routes/categoryRoutes.js");
const dishRoutes = require("./Routes/dishRoutes.js");
const favoritesRoutes = require("./Routes/favoritesRoutes.js");
const orderRoutes = require("./Routes/orderRoutes.js");
const recipeRoutes = require("./Routes/recipeRoutes.js");
const chefProfile = require("./Routes/profileChefRoutes.js");

//review
// const reviewRoutes = require('./Routes/reviewRoutes.js');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS configuration
const corsOptions = {
  origin: "http://localhost:5173", // Your frontend origin
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
};

app.use(cors(corsOptions));
app.use(cookieParser());

// Connect to Database
connectDB();

// Routes
app.use("/api/users", userRoutes);

// Contact routes

app.use("/api/contacts", contactRoutes);
app.use("/api/reviews", reviewRoutes);

// Report routes

//abdalla
app.use("/api/dish", creatDishesRoutes);
app.use("/api/recipe", creatRecioeRoutes);
app.use("/api/chefs", chefProfile);

//////////////////////////
app.use("/api/recipes", recipeRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/chef-request", chefRequestRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/dishes", dishRoutes);
app.use(express.json());
app.use("/api/favorites", favoritesRoutes);
//main route
app.get("/", (req, res) => {
  res.send("Recipe Hub!");
});

//review
app.use(express.json());
app.use("/api/review", reviewRoutes);

//payment
app.use("/api", orderRoutes);
app.use("/api", paymentRoutes);
app.use("/api", stripeRoutes);

const PORT = process.env.PORT || 3000; // Changed to 3000 to match your frontend configuration

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
