// // ReviewForm.jsx
// import { useState } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';

// const ReviewForm = ({ recipeId }) => {
//   const [rating, setRating] = useState(1);
//   const [comment, setComment] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // التأكد من أن التوكن و الـ userId موجودين في الكوكيز
//     //   const token = Cookies.get('token');
//     //   const userId = Cookies.get('user_id');
//     //   console.log(userId)
//     //   console.log(token)
//     //   if (!token || !userId) {
//     //     setError('User is not authenticated');
//     //     return;
//     //   }

      
//       await axios.post(   
//         `http://localhost:3000/api/reviews/recipes/${recipeId}/reviews`,
//         { rating, comment },
//         {withCredentials:true}
//       );

//       setSuccess('Review added successfully!');
//       setRating(1);
//       setComment('');
//     } catch (error) {
//       setError(error.response?.data?.message || 'An error occurred');
//     }
//   };

//   return (
//     <div className="review-form">
//       <h2>Add Your Review</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="rating">
//           <label>Rating:</label>
//           <select value={rating} onChange={(e) => setRating(e.target.value)}>
//             {[1, 2, 3, 4, 5].map((star) => (
//               <option key={star} value={star}>
//                 {star} Star{star > 1 ? 's' : ''}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="comment">
//           <label>Comment:</label>
//           <textarea
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//             rows="4"
//             required
//           ></textarea>
//         </div>
//         <button type="submit">Submit Review</button>
//       </form>
//       {error && <p className="error">{error}</p>}
//       {success && <p className="success">{success}</p>}
//     </div>
//   );
// };

// export default ReviewForm;
// import { useState } from 'react';
// import axios from 'axios';
// import { Star } from 'lucide-react';

// const ReviewForm = ({ recipeId }) => {
//   const [rating, setRating] = useState(1);
//   const [comment, setComment] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(
//         `http://localhost:3000/api/reviews/recipes/${recipeId}/reviews`,
//         { rating, comment },
//         { withCredentials: true }
//       );

//       setSuccess('Review added successfully!');
//       setRating(1);
//       setComment('');
//     } catch (error) {
//       setError(error.response?.data?.message || 'An error occurred');
//     }
//   };

//   return (
//     <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-8">
//       <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Add Your Review</h3>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 dark:text-gray-300 mb-2">Rating:</label>
//           <div className="flex items-center">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <Star
//                 key={star}
//                 size={32}
//                 onClick={() => setRating(star)}
//                 className={`cursor-pointer ${
//                   star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="comment" className="block text-gray-700 dark:text-gray-300 mb-2">Comment:</label>
//           <textarea
//             id="comment"
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//             className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
//             rows="4"
//             required
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
//         >
//           Submit Review
//         </button>
//       </form>
//       {error && <p className="text-red-500 mt-2">{error}</p>}
//       {success && <p className="text-green-500 mt-2">{success}</p>}
//     </div>
//   );
// };

// export default ReviewForm;
///////////////////////////////////////////////////////////////////////
import  { useState } from 'react';
import axios from 'axios';
import { Star, Send, Salad } from 'lucide-react';
import Swal from 'sweetalert2';

const ReviewForm = ({ recipeId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `http://localhost:3000/api/reviews/recipes/${recipeId}/reviews`,
        { rating, comment },
        { withCredentials: true }
      );

      Swal.fire({
        icon: 'success',
        title: 'Review Submitted!',
        text: 'Thank you for sharing your thoughts on this salad!',
        confirmButtonColor: '#16A34A',
      });

      setRating(0);
      setComment('');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response?.data?.message || 'An error occurred while submitting your review.',
        confirmButtonColor: '#16A34A',
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8 transform transition duration-500 hover:scale-105">
      <div className="flex items-center mb-4">
        <Salad size={24} className="text-green-600 mr-2" />
        <h3 className="text-2xl font-semibold text-gray-800">Rate This Salad</h3>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2 font-medium">Your Rating:</label>
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={32}
                onClick={() => setRating(star)}
                className={`cursor-pointer transition-colors duration-200 ${
                  star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300 hover:text-yellow-400'
                }`}
              />
            ))}
          </div>
        </div>
        <div>
          <label htmlFor="comment" className="block text-gray-700 mb-2 font-medium">Your Review:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
            rows="4"
            placeholder="Share your thoughts on this salad..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300 flex items-center justify-center"
        >
          <Send size={18} className="mr-2" />
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;