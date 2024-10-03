import React from "react";

function WarningPopup({ message, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Warning</h2>
        <p className="mb-4">{message}</p>
        <button
          onClick={onClose}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default WarningPopup;
