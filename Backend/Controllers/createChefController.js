const User = require("../Models/userModel");

exports.getChefProfile = async (req, res) => {
  try {
    // Retrieve user_id from cookies
    const chefId = req.cookies.user_id;
    console.log("chefId", chefId);
    // Check if user_id exists
    if (!chefId) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    // Fetch user by ID
    const chef = await User.findById(chefId).select("-password");

    // Check if user exists
    if (!chef) {
      return res.status(404).json({ message: "Chef not found" });
    }

    // Send user data as response
    res.json(chef);
  } catch (error) {
    console.error("Error fetching chef profile:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateChefProfile = async (req, res) => {
  try {
    const chefId = req.cookies.user_id;

    if (!chefId) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    const updates = req.body;

    // Update chef profile
    const updatedChef = await User.findByIdAndUpdate(chefId, updates, {
      new: true,
      runValidators: true,
    }).select("-password");

    if (!updatedChef) {
      return res.status(404).json({ message: "Chef not found" });
    }

    res.json(updatedChef);
  } catch (error) {
    console.error("Error updating chef profile:", error);
    res.status(500).json({ message: "Server error" });
  }
};
