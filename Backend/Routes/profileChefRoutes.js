const express = require("express");
const router = express.Router();
const {
  getChefProfile,
  updateChefProfile,
} = require("../Controllers/createChefController");

router.get("/profile", getChefProfile);
router.put("/update", updateChefProfile);

module.exports = router;
