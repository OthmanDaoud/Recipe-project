const paymantTransactionModel = require("../Models/paymentTransactionModel");

class paymentTransactionController {
  async createPayment(req, res) {
    try {
      const payment = new paymantTransactionModel(req.body);
      await payment.save();
      res.status(201).json({ payment });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new paymentTransactionController();
