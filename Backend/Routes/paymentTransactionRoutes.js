const express = require("express");
const paymentTransactionController = require("../Controllers/paymentTransactionController");
const router = express.Router();

router.post("/payments", paymentTransactionController.createPayment);

module.exports = router;
