const express = require("express");
const router = express.Router();
const orderController = require("../Controllers/orderController");
router.post("/orders", orderController.postNewOrder);
router.get("/total-sales", orderController.totalSales);

module.exports = router;
