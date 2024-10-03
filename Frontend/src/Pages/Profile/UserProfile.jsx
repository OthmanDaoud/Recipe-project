import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Profile from "./profile.png";
import ChefRequestForm from "../ChefRequest/ChefRequestForm";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Button,
  Paper,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import {
  Edit as EditIcon,
  Restaurant as RestaurantIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import { styled } from "@mui/system";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";

// Custom styled components
const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#E8F5E9",
  borderRadius: "16px",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-8px)",
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 120,
  height: 120,
  border: `4px solid ${theme.palette.primary.main}`,
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "25px",
  padding: "10px 20px",
  fontWeight: "bold",
  textTransform: "none",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: "#E8F5E9",
  borderRadius: "16px",
  padding: theme.spacing(3),
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: "12px",
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s, box-shadow 0.2s",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
  },
}));

// Custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#4CAF50", // Fresh green color
    },
    secondary: {
      main: "#FF5722", // Carrot orange color
    },
    background: {
      default: "#F1F8E9", // Light green background
    },
    text: {
      primary: "#33691E", // Dark green text
      secondary: "#689F38", // Medium green text
    },
  },
});

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({});
  const [showChefRequestForm, setShowChefRequestForm] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/users/profile`,
        { withCredentials: true }
      );
      console.log(response.data);
      setUser(response.data);
      setEditedUser(response.data);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => {
    setIsEditing(false);
    setEditedUser(user);
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(
        "http://localhost:3000/api/users/profile",
        editedUser,
        { withCredentials: true }
      );
      setUser(response.data);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleRemoveSavedRecipe = async (recipeId) => {
    try {
      console.log(recipeId);
      const response = await axios.delete(
        `http://localhost:3000/api/users/saved-recipes/${recipeId}`,
        { withCredentials: true }
      );
      console.log("Server response:", response.data);
      fetchUserProfile();
    } catch (error) {
      console.error(
        "Error removing saved recipe:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleRemoveOrderHistory = async (orderId) => {
    try {
      await axios.delete(
        `http://localhost:3000/api/users/order-history/${orderId}`,
        { withCredentials: true }
      );
      fetchUserProfile();
    } catch (error) {
      console.error("Error removing order history:", error);
    }
  };

  const handleChefRequest = () => setShowChefRequestForm(true);
  const closeChefRequestForm = () => setShowChefRequestForm(false);

  if (!user)
    return (
      <Typography variant="h6" align="center" sx={{ mt: 4 }}>
        Loading...
      </Typography>
    );

  const RecipeList = ({ user, handleRemoveSavedRecipe }) => {};

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h3"
            component="h1"
            align="center"
            color="primary"
            gutterBottom
            sx={{ fontWeight: "bold", mb: 4 }}
          >
            User Profile
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <StyledCard>
                <CardHeader
                  avatar={
                    <StyledAvatar
                      src={user.profilePicture || Profile}
                      alt={user.name}
                    />
                  }
                  title={
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                      {user.name}
                    </Typography>
                  }
                  subheader={
                    <Typography variant="h6" color="text.secondary">
                      {user.role}
                    </Typography>
                  }
                />
                <CardContent>
                  <Typography variant="body1" paragraph>
                    <strong>Email:</strong> {user.email}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>Bio:</strong> {user.bio}
                  </Typography>
                  <StyledButton
                    startIcon={<EditIcon />}
                    onClick={handleEdit}
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                  >
                    Edit Profile
                  </StyledButton>
                  <div className={user.role == "chef" ? "hidden" : ""}>
                    <StyledButton
                      startIcon={<RestaurantIcon />}
                      onClick={handleChefRequest}
                      variant="outlined"
                      color="secondary"
                      fullWidth
                      sx={{ mt: 2 }}
                    >
                      Become a Chef
                    </StyledButton>
                  </div>

                  <div className={user.role == "chef" ? "" : "hidden"}>
                    <StyledButton
                      startIcon={<RestaurantIcon />}
                      onClick={() => navigate("/profileChef")}
                      variant="outlined"
                      fullWidth
                      sx={{
                        mt: 2,
                        backgroundImage:
                          "linear-gradient(45deg, #FF6B6B, #FFD93D)", // Gradient color
                        color: "white", // Text color
                        "&:hover": {
                          backgroundImage:
                            "linear-gradient(45deg, #FFD93D, #FF6B6B)", // Reverse gradient on hover
                          boxShadow: "0px 4px 20px rgba(255, 107, 107, 0.7)", // Shadow effect on hover
                        },
                      }}
                    >
                      Chef Dashboard
                    </StyledButton>
                  </div>
                </CardContent>
              </StyledCard>
            </Grid>

            <Grid item xs={12} md={8}>
              <StyledPaper>
                <Tabs
                  value={tabValue}
                  onChange={handleTabChange}
                  centered
                  sx={{ mb: 3 }}
                >
                  <Tab label="Saved Recipes" />
                  <Tab label="Order History" />
                </Tabs>

                {tabValue === 0 && (
                  <List>
                    {user.savedRecipes?.map((recipe) => (
                      <StyledListItem key={recipe.id}>
                        <Grid container spacing={2} alignItems="center">
                          {/* Recipe Image */}
                          <Grid item xs={12} md={3}>
                            {recipe.photos.length > 0 ? (
                              <Avatar
                                src={recipe.photos[0]}
                                alt={recipe.title}
                                variant="rounded"
                                sx={{
                                  width: "100%",
                                  height: "160px",
                                  borderRadius: "12px",
                                  objectFit: "cover",
                                }}
                              />
                            ) : (
                              <Avatar
                                sx={{
                                  width: "100%",
                                  height: "160px",
                                  borderRadius: "12px",
                                  backgroundColor: "#e0e0e0",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <Typography variant="h6" color="textSecondary">
                                  No Image
                                </Typography>
                              </Avatar>
                            )}
                          </Grid>

                          {/* Recipe Details */}
                          <Grid item xs={12} md={6}>
                            <ListItemText
                              primary={
                                <Typography
                                  variant="h5"
                                  sx={{ color: "#333", fontWeight: "bold" }}
                                >
                                  {recipe.title}
                                </Typography>
                              }
                              secondary={
                                <div style={{ marginTop: "10px" }}>
                                  <Typography
                                    variant="body2"
                                    sx={{ color: "#757575", mb: 1 }}
                                  >
                                    Chef: {recipe.chef?.name}
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    sx={{ color: "#757575", mb: 1 }}
                                  >
                                    Cooking Time: {recipe.cookingTime} mins
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    sx={{ color: "#757575", mb: 1 }}
                                  >
                                    Cuisine Type: {recipe.cuisineType}
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    sx={{ color: "#757575", mb: 1 }}
                                  >
                                    Servings: {recipe.servings}
                                  </Typography>
                                </div>
                              }
                            />
                          </Grid>
                          {/* Action Buttons */}
                          <Grid
                            item
                            xs={12}
                            md={3}
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-end",
                              gap: "12px",
                            }}
                          >
                            <StyledButton
                              variant="contained"
                              onClick={() => navigate(`/recipe/${recipe._id}`)}
                              sx={{
                                backgroundColor: "#4caf50",
                                color: "#fff",
                                "&:hover": {
                                  backgroundColor: "#388e3c",
                                },
                                width: "100%",
                              }}
                            >
                              View Details
                            </StyledButton>
                            <IconButton
                              edge="end"
                              aria-label="delete"
                              onClick={() =>
                                handleRemoveSavedRecipe(recipe._id)
                              }
                              sx={{
                                color: "#e53935",
                                transition: "color 0.2s",
                                "&:hover": { color: "#d32f2f" },
                              }}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </Grid>
                        </Grid>
                      </StyledListItem>
                    ))}
                  </List>
                )}

                {tabValue === 1 && (
                  <List>
                    {user.orderHistory?.map((order) => (
                      <StyledListItem key={order.id}>
                        <Grid container spacing={2} alignItems="center">
                          {/* Order Details */}
                          <Grid item xs={12} md={8}>
                            <ListItemText
                              primary={
                                <Typography
                                  variant="h5"
                                  color="primary"
                                  sx={{ fontWeight: "bold" }}
                                >
                                  Order on{" "}
                                  {new Date(
                                    order.orderDate
                                  ).toLocaleDateString()}
                                </Typography>
                              }
                              secondary={
                                <>
                                  <Typography
                                    variant="body1"
                                    color="textSecondary"
                                    sx={{ mt: 1 }}
                                  >
                                    Status:{" "}
                                    <span
                                      style={{
                                        color: "#4caf50",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      {order.status}
                                    </span>
                                  </Typography>
                                  <Typography
                                    variant="body1"
                                    color="textSecondary"
                                  >
                                    Total Amount:{" "}
                                    <span
                                      style={{
                                        color: "#1976d2",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      ${order.totalAmount.toFixed(2)}
                                    </span>
                                  </Typography>
                                  <Typography
                                    variant="body1"
                                    color="textSecondary"
                                  >
                                    Chef: {order.chef?.name}
                                  </Typography>
                                  <Typography
                                    variant="body1"
                                    color="textSecondary"
                                  >
                                    Delivery Method: {order.deliveryMethod}
                                  </Typography>

                                  {/* List of Dishes Ordered */}
                                  <Typography
                                    variant="body1"
                                    color="textSecondary"
                                    sx={{ mt: 2 }}
                                  >
                                    Dishes:
                                    <ul style={{ paddingLeft: "20px" }}>
                                      {order.dishes
                                        .sort((a, b) =>
                                          a.dish.name.localeCompare(b.dish.name)
                                        )
                                        .map((dishItem) => (
                                          <li
                                            key={dishItem.dish.id}
                                            style={{ marginBottom: "4px" }}
                                          >
                                            <span
                                              style={{ fontWeight: "bold" }}
                                            >
                                              {dishItem.dish.name}
                                            </span>{" "}
                                            - {dishItem.quantity}x
                                          </li>
                                        ))}
                                    </ul>
                                  </Typography>
                                </>
                              }
                            />
                          </Grid>

                          {/* Delete Button */}
                          <Grid item xs={12} md={4} sx={{ textAlign: "right" }}>
                            <IconButton
                              edge="end"
                              aria-label="delete"
                              onClick={() =>
                                handleRemoveOrderHistory(order._id)
                              }
                              sx={{
                                color: "#ff5722",
                                "&:hover": {
                                  backgroundColor: "rgba(255, 87, 34, 0.1)",
                                },
                              }}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </Grid>
                        </Grid>
                      </StyledListItem>
                    ))}
                  </List>
                )}
              </StyledPaper>
            </Grid>
          </Grid>

          <Dialog
            open={isEditing}
            onClose={handleCancel}
            maxWidth="sm"
            fullWidth
          >
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogContent>
              <TextField
                name="name"
                label="Name"
                value={editedUser.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                name="email"
                label="Email"
                value={editedUser.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                name="bio"
                label="Bio"
                value={editedUser.bio}
                onChange={handleChange}
                fullWidth
                multiline
                rows={4}
                margin="normal"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCancel} color="primary">
                Cancel
              </Button>
              <Button onClick={handleSave} color="primary" variant="contained">
                Save
              </Button>
            </DialogActions>
          </Dialog>

          {/* Chef Request Form as Popup */}
          <Dialog
            open={showChefRequestForm}
            onClose={closeChefRequestForm}
            fullWidth
            sx={{ zIndex: 1050 }}
          >
            <DialogContent>
              <ChefRequestForm onClose={closeChefRequestForm} />
            </DialogContent>
          </Dialog>
        </motion.div>
      </Container>
    </ThemeProvider>
  );
};

export default UserProfile;
