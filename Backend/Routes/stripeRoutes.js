const express = require("express");
const { createPaymentIntent } = require("../Controllers/stripeController");

const router = express.Router();

router.post("/create-payment-intent", createPaymentIntent);

module.exports = router;
