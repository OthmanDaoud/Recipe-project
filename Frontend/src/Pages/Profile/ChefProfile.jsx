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

import { createTheme, ThemeProvider } from "@mui/material/styles";

const ChefProfile = ({ chef }) => {
  const [tabValue, setTabValue] = useState(0);
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({});

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/users/profile",
        { withCredentials: true }
      );
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

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        align="center"
        color="primary"
        gutterBottom
      >
        Chef Profile
      </Typography>

      <Grid container spacing={4}>
        {/* Profile Card */}
        <Grid item xs={12} md={4}>
          <Card elevation={3} sx={{ backgroundColor: "#E8F5E9" }}>
            <CardHeader
              avatar={
                <Avatar
                  src={chef.profilePicture || Profile}
                  alt={chef.name}
                  sx={{ width: 80, height: 80 }}
                />
              }
              title={<Typography variant="h5">{chef.name}</Typography>}
              subheader={
                <Typography variant="subtitle1" color="text.secondary">
                  Chef - {chef.yearsOfExperience} Years of Experience
                </Typography>
              }
            />
            <CardContent>
              <Typography variant="body1" paragraph>
                <strong>Email:</strong> {chef.email}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Culinary Specialties:</strong>{" "}
                {chef.culinarySpecialties.join(", ")}
              </Typography>
              <Button
                startIcon={<EditIcon />}
                onClick={handleEdit}
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Edit Profile
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Tabs for Dishes and Recipes */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 3, backgroundColor: "#E8F5E9" }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              centered
              sx={{ mb: 3 }}
            >
              <Tab label="Dish List" />
              <Tab label="Recipe List" />
            </Tabs>

            {/* Dish List */}
            {tabValue === 0 && (
              <List>
                {chef.dishes?.map((dish) => (
                  <ListItem
                    key={dish.id}
                    sx={{
                      mb: 3,
                      backgroundColor: "#fff",
                      borderRadius: "12px",
                      padding: "20px",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={12} md={3}>
                        <Avatar
                          src={dish.image}
                          alt={dish.name}
                          variant="square"
                          sx={{
                            width: "100%",
                            height: "160px",
                            borderRadius: "12px",
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <ListItemText
                          primary={
                            <Typography variant="h6">{dish.name}</Typography>
                          }
                          secondary={
                            <>
                              <Typography variant="body2">
                                Price: ${dish.price}
                              </Typography>
                              <Typography variant="body2">
                                Cuisine: {dish.cuisineType}
                              </Typography>
                            </>
                          }
                        />
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Button
                          variant="contained"
                          onClick={() => navigate(`/dish/${dish._id}`)}
                          sx={{
                            backgroundColor: "#4caf50",
                            color: "#fff",
                          }}
                        >
                          View Details
                        </Button>
                      </Grid>
                    </Grid>
                  </ListItem>
                ))}
              </List>
            )}

            {/* Recipe List */}
            {tabValue === 1 && (
              <List>
                {chef.recipes?.map((recipe) => (
                  <ListItem
                    key={recipe.id}
                    sx={{
                      mb: 3,
                      backgroundColor: "#fff",
                      borderRadius: "12px",
                      padding: "20px",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={12} md={3}>
                        <Avatar
                          src={recipe.image}
                          alt={recipe.name}
                          variant="square"
                          sx={{
                            width: "100%",
                            height: "160px",
                            borderRadius: "12px",
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <ListItemText
                          primary={
                            <Typography variant="h6">{recipe.name}</Typography>
                          }
                          secondary={
                            <>
                              <Typography variant="body2">
                                Cooking Time: {recipe.cookingTime} mins
                              </Typography>
                              <Typography variant="body2">
                                Servings: {recipe.servings}
                              </Typography>
                            </>
                          }
                        />
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Button
                          variant="contained"
                          onClick={() => navigate(`/recipe/${recipe._id}`)}
                          sx={{
                            backgroundColor: "#4caf50",
                            color: "#fff",
                          }}
                        >
                          View Details
                        </Button>
                      </Grid>
                    </Grid>
                  </ListItem>
                ))}
              </List>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ChefProfile;
