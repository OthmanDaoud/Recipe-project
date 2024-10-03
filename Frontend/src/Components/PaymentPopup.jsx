import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import Cookies from "js-cookie";

function PaymentPopup({ onBack, onClose, orderData }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setError(null);

    if (!stripe || !elements) {
      return;
    }

    try {
      // Include user ID in order data
      const userId = Cookies.get("user_id");
      const orderDataWithUserId = {
        ...orderData,
        userId,
      };

      // Create a payment intent on the server
      const { data: clientSecret } = await axios.post(
        "http://localhost:3000/api/create-payment-intent",
        {
          amount: orderData.totalAmount * 100, // Stripe expects amount in cents
        }
      );

      // Confirm the payment on the client
      const { error: stripeError, paymentIntent } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        });

      if (stripeError) {
        throw new Error(stripeError.message);
      }

      if (paymentIntent.status === "succeeded") {
        // Payment successful, create order and payment records
        const orderResponse = await axios.post(
          "http://localhost:3000/api/orders",
          orderDataWithUserId,
          { withCredentials: true }
        );
        const paymentResponse = await axios.post(
          "http://localhost:3000/api/payments",
          {
            order: orderResponse.data.order._id,
            amount: orderData.totalAmount,
            status: "completed",
            paymentMethod: "card",
            transactionId: paymentIntent.id,
          }
        );

        onClose(); // Close the popup
        // You might want to clear the cart and show a success message here
      }
    } catch (err) {
      setError(err.message || "An error occurred during payment processing");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Payment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="card-element"
            className="block text-sm font-medium text-gray-700"
          >
            Credit or debit card
          </label>
          <div className="mt-1">
            <CardElement
              id="card-element"
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </div>
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={onBack}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-200"
            disabled={isProcessing}
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200"
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : "Pay"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default PaymentPopup;
