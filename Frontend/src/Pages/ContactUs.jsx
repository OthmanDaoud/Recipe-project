import { useState } from "react";
import usePostData from "../Hooks/usePostData";
import Swal from "sweetalert2";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const { response, loading, error, postData } = usePostData(
    "http://localhost:3000/api/contacts/"
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show confirmation before sending the message
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to send this message?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, send it!",
    });

    if (result.isConfirmed) {
      try {
        await postData(formData);
        if (!error) {
          setFormData({ name: "", email: "", message: "", subject: "" });
          // Show success message after form submission
          Swal.fire({
            title: "Sent!",
            text: "Your message has been sent successfully.",
            icon: "success",
            confirmButtonColor: "#3085d6",
          });
        }
      } catch (err) {
        console.error("Error submitting form:", err);
        // Show error message
        Swal.fire({
          title: "Error!",
          text: "There was an issue submitting your message.",
          icon: "error",
          confirmButtonColor: "#d33",
        });
      }
    }
  };

  const getErrorMessage = (error) => {
    if (error.response) {
      console.error("Error data:", error.response.data);
      console.error("Error status:", error.response.status);
      return (
        error.response.data.error ||
        error.response.data.message ||
        "Server error"
      );
    } else if (error.request) {
      console.error("Error request:", error.request);
      return "No response received from server";
    } else {
      console.error("Error message:", error.message);
      return error.message;
    }
  };

  return (
    <div className="py-24 bg-gradient-to-b from-green-100 to-white">
      <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg border-4 border-green-300 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400"></div>
        <div
          className="absolute top-2 left-2 w-16 h-16 bg-contain bg-no-repeat"
          style={{ backgroundImage: "url('/api/placeholder/64/64')" }}
        ></div>
        <h2 className="text-3xl font-bold text-center text-green-800 mb-6">
          Contact Us a Message
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-green-700 mb-1"
            >
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-sm border-2 border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="John Lettuce"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-green-700 mb-1"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-sm border-2 border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="john@freshgreens.com"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-green-700 mb-1"
            >
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm border-2 border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="New Salad Idea"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-green-700 mb-1"
            >
              Your Tasty Thoughts:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-sm border-2 border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent h-32"
              placeholder="Share your salad dreams with us..."
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 ${
              loading
                ? "opacity-50 cursor-not-allowed"
                : "transform hover:scale-105"
            }`}
          >
            {loading ? "Send your message..." : "Send Your Message"}
          </button>
        </form>
        {error && (
          <p className="mt-4 p-3 text-sm bg-red-100 text-red-700 rounded-md border border-red-300">
            {getErrorMessage(error)}
          </p>
        )}
        {response && (
          <p className="mt-4 p-3 text-sm bg-green-100 text-green-700 rounded-md border border-green-300">
            Your message has been perfectly tossed into our salad bowl of ideas!
          </p>
        )}
      </div>
    </div>
  );
}

export default ContactUs;
