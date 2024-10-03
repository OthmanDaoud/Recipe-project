// import  { useEffect, useState } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';

// const ReviewsList = ({ recipeId }) => {
//   const [reviews, setReviews] = useState([]);
//   const [error, setError] = useState('');

//   // جلب المراجعات عند تحميل المكون
//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await axios.get(`/api/reviews/recipes/${recipeId}`);
//         setReviews(response.data);
//       } catch (error) {
//         setError(error.response?.data?.message || 'Failed to load reviews');
//       }
//     };

//     fetchReviews();
//   }, [recipeId]);

//   // حذف المراجعة
//   const handleDelete = async (reviewId) => {
//     try {
//       const userId = Cookies.get('userId');
//       await axios.delete(`/api/reviews/${reviewId}`);
//       setReviews(reviews.filter(review => review._id !== reviewId));
//     } catch (error) {
//       setError(error.response?.data?.message || 'Failed to delete review');
//     }
//   };

//   // تحديث المراجعة (نقوم فقط بعمل نافذة صغيرة لتعديل التعليق هنا)
//   const handleUpdate = async (reviewId, newComment, newRating) => {
//     try {
//       const response = await axios.put(`/api/reviews/update/${reviewId}`, {
//         comment: newComment,
//         rating: newRating,
//       });
//       setReviews(reviews.map(review => (review._id === reviewId ? response.data.review : review)));
//     } catch (error) {
//       setError(error.response?.data?.message || 'Failed to update review');
//     }
//   };

//   return (
//     <div className="reviews-list">
//       <h2>Reviews</h2>
//       {error && <p className="error">{error}</p>}
//       {reviews.length > 0 ? (
//         reviews.map((review) => (
//           <div key={review._id} className="review">
//             <p><strong>{review.user.name}</strong></p>
//             <p>Rating: {review.rating}</p>
//             <p>{review.comment}</p>
//             <button onClick={() => handleDelete(review._id)}>Delete</button>
//             <button onClick={() => handleUpdate(review._id, prompt('Enter new comment'), prompt('Enter new rating'))}>
//               Update
//             </button>
//             {/* الردود */}
//             <div className="replies">
//               {review.replies.length > 0 && <h4>Replies:</h4>}
//               {review.replies.map((reply) => (
//                 <div key={reply._id}>
//                   <p>{reply.content} - <strong>{reply.author.name}</strong></p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>No reviews yet</p>
//       )}
//     </div>
//   );
// };

// export default ReviewsList;
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';

// const ReviewsList = ({ recipeId }) => {
//   const [reviews, setReviews] = useState([]);
//   const [error, setError] = useState('');

//   // جلب المراجعات عند تحميل المكون
//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/api/reviews/recipes/${recipeId}/reviews`);
//         const reviewsData = response.data;

//         // تأكد من أن البيانات هي مصفوفة قبل تعيينها
//         if (Array.isArray(reviewsData)) {
//           setReviews(reviewsData);
//         } else {
//           setReviews([]); // إذا كانت البيانات ليست مصفوفة، نعين مصفوفة فارغة
//         }
//       } catch (error) {
//         setError(error.response?.data?.message || 'Failed to load reviews');
//       }
//     };

//     fetchReviews();
//   }, [recipeId]);

//   // حذف المراجعة
//   const handleDelete = async (reviewId) => {
//     try {
//     //   const userId = Cookies.get('user_id');
//       await axios.put(`http://localhost:3000/api/reviews/reviews/${reviewId}`,
//         {},
//         {withCredentials:true}
//       );
//       setReviews(reviews.filter(review => review._id !== reviewId));
//     } catch (error) {
//       setError(error.response?.data?.message || 'Failed to delete review');
//     }
//   };

//   // تحديث المراجعة
//   const handleUpdate = async (reviewId) => {
//     const newComment = prompt('Enter new comment');
//     const newRating = prompt('Enter new rating');
//     if (!newComment || !newRating) return;

//     try {
//       const response = await axios.put(`http://localhost:3000/api/reviews/update/${reviewId}`, {
//         comment: newComment,
//         rating: newRating,
//       },
//       {withCredentials:true});
//       setReviews(reviews.map(review => (review._id === reviewId ? response.data.review : review)));
//     } catch (error) {
//       setError(error.response?.data?.message || 'Failed to update review');
//     }
//   };

//   return (
//     <div className="reviews-list">
//       <h2>Reviews</h2>
//       {error && <p className="error">{error}</p>}
//       {reviews.length > 0 ? (
//         reviews.map((review) => (
//           <div key={review._id} className="review">
//             <p><strong>{review.user.name}</strong></p>
//             <p>Rating: {review.rating}</p>
//             <p>{review.comment}</p>
//             <button onClick={() => handleDelete(review._id)}>Delete</button>
//             <button onClick={() => handleUpdate(review._id)}>Update</button>

//             {/* الردود */}
//             {Array.isArray(review.replies) && review.replies.length > 0 && (
//               <div className="replies">
//                 <h4>Replies:</h4>
//                 {review.replies.map((reply) => (
//                   <div key={reply._id}>
//                     <p>{reply.content} - <strong>{reply.author.name}</strong></p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))
//       ) : (
//         <p>No reviews yet</p>
//       )}
//     </div>
//   );
// };

// export default ReviewsList;
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';

// const ReviewsList = ({ recipeId }) => {
//   const [reviews, setReviews] = useState([]);
//   const [error, setError] = useState('');

//   // جلب المراجعات عند تحميل المكون
//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/api/reviews/recipes/${recipeId}/reviews`);
//         const reviewsData = response.data;

//         //  التاكد من  البيانات هي مصفوفة قبل تعيينها
//         if (Array.isArray(reviewsData)) {
//           setReviews(reviewsData);
//         } else {
//           setReviews([]); // إذا كانت البيانات ليست مصفوفة، نعين مصفوفة فارغة
//         }
//       } catch (error) {
//         setError(error.response?.data?.message || 'Failed to load reviews');
//       }
//     };

//     fetchReviews();
//   }, [recipeId]);

//   // حذف المراجعة
//   const handleDelete = async (reviewId) => {
//     try {
//       await axios.put(`http://localhost:3000/api/reviews/reviews/${reviewId}`,
//         {},
//         { withCredentials: true }
//       );
//       setReviews(reviews.filter(review => review._id !== reviewId));
//     } catch (error) {
//       setError(error.response?.data?.message || 'Failed to delete review');
//     }
//   };

//   // تحديث المراجعة
//   const handleUpdate = async (reviewId) => {
//     const newComment = prompt('Enter new comment');
//     const newRating = prompt('Enter new rating');
//     if (!newComment || !newRating) return;

//     try {
//       const response = await axios.put(`http://localhost:3000/api/reviews/update/${reviewId}`, {
//         comment: newComment,
//         rating: newRating,
//       },
//       { withCredentials: true });
//       setReviews(reviews.map(review => (review._id === reviewId ? response.data.review : review)));
//     } catch (error) {
//       setError(error.response?.data?.message || 'Failed to update review');
//     }
//   };

//   // إضافة رد على مراجعة
//   const handleReply = async (reviewId) => {
//     const replyContent = prompt('Enter your reply');
//     if (!replyContent) return;

//     try {
//       const userId = Cookies.get('user_id'); // الحصول على معرف المستخدم
//       const response = await axios.post(
//         `http://localhost:3000/api/reviews/reviews/${reviewId}/replies`,
//         { content: replyContent, authorId: userId },
//         { withCredentials: true }
//       );

//       // تحديث الردود في المراجعة
//       setReviews(reviews.map(review =>
//         review._id === reviewId ? { ...review, replies: [...review.replies, response.data.reply] } : review
//       ));
//     } catch (error) {
//       setError(error.response?.data?.message || 'Failed to add reply');
//     }
//   };

//   return (
//     <div className="reviews-list">
//       <h2>Reviews</h2>
//       {error && <p className="error">{error}</p>}
//       {reviews.length > 0 ? (
//         reviews.map((review) => (
//           <div key={review._id} className="review">
//             <p><strong>{review.user.name}</strong></p>
//             <p>Rating: {review.rating}</p>
//             <p>{review.comment}</p>
//             <button onClick={() => handleDelete(review._id)}>Delete</button>
//             <button onClick={() => handleUpdate(review._id)}>Update</button>
//             <button onClick={() => handleReply(review._id)}>Reply</button>

//             {/* عرض الردود */}
//             {Array.isArray(review.replies) && review.replies.length > 0 && (
//               <div className="replies">
//                 <h4>Replies:</h4>
//                 {review.replies.map((reply) => (
//                   <div key={reply._id}>
//                     <p>{reply.content} - <strong>{reply.author.name}</strong></p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))
//       ) : (
//         <p>No reviews yet</p>
//       )}
//     </div>
//   );
// };

// export default ReviewsList;
///////////////////////////////////////////////////////////////////
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import { Star, Trash2, Edit2, MessageCircle } from 'lucide-react';

// const ReviewsList = ({ recipeId }) => {
//   const [reviews, setReviews] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/api/reviews/recipes/${recipeId}/reviews`);
//         const reviewsData = response.data;
//         if (Array.isArray(reviewsData)) {
//           setReviews(reviewsData);
//         } else {
//           setReviews([]);
//         }
//       } catch (error) {
//         setError(error.response?.data?.message || 'Failed to load reviews');
//       }
//     };

//     fetchReviews();
//   }, [recipeId]);

//   const handleDelete = async (reviewId) => {
//     try {
//       await axios.put(`http://localhost:3000/api/reviews/reviews/${reviewId}`, {}, { withCredentials: true });
//       setReviews(reviews.filter(review => review._id !== reviewId));
//     } catch (error) {
//       setError(error.response?.data?.message || 'Failed to delete review');
//     }
//   };

//   const handleUpdate = async (reviewId) => {
//     const newComment = prompt('Enter new comment');
//     const newRating = prompt('Enter new rating');
//     if (!newComment || !newRating) return;

//     try {
//       const response = await axios.put(
//         `http://localhost:3000/api/reviews/update/${reviewId}`,
//         { comment: newComment, rating: newRating },
//         { withCredentials: true }
//       );
//       setReviews(reviews.map(review => (review._id === reviewId ? response.data.review : review)));
//     } catch (error) {
//       setError(error.response?.data?.message || 'Failed to update review');
//     }
//   };

//   const handleReply = async (reviewId) => {
//     const replyContent = prompt('Enter your reply');
//     if (!replyContent) return;

//     try {
//       const userId = Cookies.get('user_id');
//       const response = await axios.post(
//         `http://localhost:3000/api/reviews/reviews/${reviewId}/replies`,
//         { content: replyContent, authorId: userId },
//         { withCredentials: true }
//       );
//       setReviews(reviews.map(review =>
//         review._id === reviewId ? { ...review, replies: [...review.replies, response.data.reply] } : review
//       ));
//     } catch (error) {
//       setError(error.response?.data?.message || 'Failed to add reply');
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Reviews</h3>
//       {error && <p className="text-red-500">{error}</p>}
//       {reviews.length > 0 ? (
//         reviews.map((review) => (
//           <div key={review._id} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
//             <div className="flex justify-between items-start mb-4">
//               <div>
//                 <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{review.user.name}</h4>
//                 <div className="flex items-center mt-1">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       size={16}
//                       className={i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
//                     />
//                   ))}
//                 </div>
//               </div>
//               <div className="flex space-x-2">
//                 <button onClick={() => handleDelete(review._id)} className="text-red-500 hover:text-red-700">
//                   <Trash2 size={20} />
//                 </button>
//                 <button onClick={() => handleUpdate(review._id)} className="text-blue-500 hover:text-blue-700">
//                   <Edit2 size={20} />
//                 </button>
//                 <button onClick={() => handleReply(review._id)} className="text-green-500 hover:text-green-700">
//                   <MessageCircle size={20} />
//                 </button>
//               </div>
//             </div>
//             <p className="text-gray-700 dark:text-gray-300 mb-4">{review.comment}</p>
//             {Array.isArray(review.replies) && review.replies.length > 0 && (
//               <div className="mt-4 space-y-2">
//                 <h5 className="font-semibold text-gray-900 dark:text-white">Replies:</h5>
//                 {review.replies.map((reply) => (
//                   <div key={reply._id} className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
//                     <p className="text-gray-700 dark:text-gray-300">{reply.content}</p>
//                     <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">- {reply.author.name}</p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))
//       ) : (
//         <p className="text-gray-700 dark:text-gray-300">No reviews yet</p>
//       )}
//     </div>
//   );
// };

// export default ReviewsList;
//////////////////////////////////////////////////////////////////
// import  { useEffect, useState } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import { Star, Trash2, Edit2, MessageCircle, Send } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Textarea } from '@/components/ui/textarea';
// import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

// const ReviewsList = ({ recipeId }) => {
//   const [reviews, setReviews] = useState([]);
//   const [error, setError] = useState('');
//   const [replyContent, setReplyContent] = useState({});

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/api/reviews/recipes/${recipeId}/reviews`);
//         const reviewsData = response.data;
//         if (Array.isArray(reviewsData)) {
//           setReviews(reviewsData);
//           const initialReplyContent = {};
//           reviewsData.forEach(review => {
//             initialReplyContent[review._id] = '';
//           });
//           setReplyContent(initialReplyContent);
//         } else {
//           setReviews([]);
//         }
//       } catch (error) {
//         setError(error.response?.data?.message || 'Failed to load reviews');
//       }
//     };

//     fetchReviews();
//   }, [recipeId]);

//   const handleDelete = async (reviewId) => {
//     try {
//       await axios.put(`http://localhost:3000/api/reviews/reviews/${reviewId}`, {}, { withCredentials: true });
//       setReviews(reviews.filter(review => review._id !== reviewId));
//     } catch (error) {
//       setError(error.response?.data?.message || 'Failed to delete review');
//     }
//   };

//   const handleUpdate = async (reviewId) => {
//     const newComment = prompt('Enter new comment');
//     const newRating = prompt('Enter new rating');
//     if (!newComment || !newRating) return;

//     try {
//       const response = await axios.put(
//         `http://localhost:3000/api/reviews/update/${reviewId}`,
//         { comment: newComment, rating: newRating },
//         { withCredentials: true }
//       );
//       setReviews(reviews.map(review => (review._id === reviewId ? response.data.review : review)));
//     } catch (error) {
//       setError(error.response?.data?.message || 'Failed to update review');
//     }
//   };

//   const handleReply = async (reviewId) => {
//     if (!replyContent[reviewId]) return;

//     try {
//       const userId = Cookies.get('user_id');
//       const response = await axios.post(
//         `http://localhost:3000/api/reviews/reviews/${reviewId}/replies`,
//         { content: replyContent[reviewId], authorId: userId },
//         { withCredentials: true }
//       );
//       setReviews(reviews.map(review =>
//         review._id === reviewId ? { ...review, replies: [...review.replies, response.data.reply] } : review
//       ));
//       setReplyContent({ ...replyContent, [reviewId]: '' });
//     } catch (error) {
//       setError(error.response?.data?.message || 'Failed to add reply');
//     }
//   };

//   return (
//     <div className="space-y-6 bg-white p-6 rounded-lg shadow">
//       <h3 className="text-2xl font-semibold text-gray-900 mb-4">Reviews</h3>
//       {error && <p className="text-red-500">{error}</p>}
//       {reviews.length > 0 ? (
//         reviews.map((review) => (
//           <Card key={review._id} className="mb-4">
//             <CardHeader className="flex justify-between items-start">
//               <div>
//                 <h4 className="text-lg font-semibold text-gray-900">{review.user.name}</h4>
//                 <div className="flex items-center mt-1">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       size={16}
//                       className={i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
//                     />
//                   ))}
//                 </div>
//               </div>
//               <div className="flex space-x-2">
//                 <Button variant="ghost" size="icon" onClick={() => handleDelete(review._id)} className="text-red-500 hover:text-red-700">
//                   <Trash2 size={20} />
//                 </Button>
//                 <Button variant="ghost" size="icon" onClick={() => handleUpdate(review._id)} className="text-blue-500 hover:text-blue-700">
//                   <Edit2 size={20} />
//                 </Button>
//               </div>
//             </CardHeader>
//             <CardContent>
//               <p className="text-gray-700">{review.comment}</p>
//               {Array.isArray(review.replies) && review.replies.length > 0 && (
//                 <div className="mt-4 space-y-2">
//                   <h5 className="font-semibold text-gray-900">Replies:</h5>
//                   {review.replies.map((reply) => (
//                     <div key={reply._id} className="bg-gray-100 p-3 rounded-lg">
//                       <p className="text-gray-700">{reply.content}</p>
//                       <p className="text-sm text-gray-500 mt-1">- {reply.author.name}</p>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </CardContent>
//             <CardFooter>
//               <div className="w-full space-y-2">
//                 <Textarea
//                   placeholder="Write your reply..."
//                   value={replyContent[review._id] || ''}
//                   onChange={(e) => setReplyContent({ ...replyContent, [review._id]: e.target.value })}
//                   className="w-full"
//                 />
//                 <Button onClick={() => handleReply(review._id)} className="bg-[#16A34A] hover:bg-[#15803d] text-white">
//                   <Send className="mr-2 h-4 w-4" /> Send Reply
//                 </Button>
//               </div>
//             </CardFooter>
//           </Card>
//         ))
//       ) : (
//         <p className="text-gray-700">No reviews yet</p>
//       )}
//     </div>
//   );
// };

// export default ReviewsList;
////////////////////////////////////////////////////////////////
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';

// const ReviewsList = ({ recipeId }) => {
//   const [reviews, setReviews] = useState([]);
//   const [error, setError] = useState('');
//   const [replyContent, setReplyContent] = useState({});

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/api/reviews/recipes/${recipeId}/reviews`);
//         const reviewsData = response.data;
//         if (Array.isArray(reviewsData)) {
//           setReviews(reviewsData);
//           const initialReplyContent = {};
//           reviewsData.forEach(review => {
//             initialReplyContent[review._id] = '';
//           });
//           setReplyContent(initialReplyContent);
//         } else {
//           setReviews([]);
//         }
//       } catch (error) {
//         setError(error.response?.data?.message || 'Failed to load reviews');
//       }
//     };

//     fetchReviews();
//   }, [recipeId]);

//   const handleDelete = async (reviewId) => {
//     try {
//       await axios.put(`http://localhost:3000/api/reviews/reviews/${reviewId}`, {}, { withCredentials: true });
//       setReviews(reviews.filter(review => review._id !== reviewId));
//     } catch (error) {
//       setError(error.response?.data?.message || 'Failed to delete review');
//     }
//   };

//   const handleUpdate = async (reviewId) => {
//     const newComment = prompt('Enter new comment');
//     const newRating = prompt('Enter new rating');
//     if (!newComment || !newRating) return;

//     try {
//       const response = await axios.put(
//         `http://localhost:3000/api/reviews/update/${reviewId}`,
//         { comment: newComment, rating: newRating },
//         { withCredentials: true }
//       );
//       setReviews(reviews.map(review => (review._id === reviewId ? response.data.review : review)));
//     } catch (error) {
//       setError(error.response?.data?.message || 'Failed to update review');
//     }
//   };

//   const handleReply = async (reviewId) => {
//     if (!replyContent[reviewId]) return;

//     try {
//       const userId = Cookies.get('user_id');
//       const response = await axios.post(
//         `http://localhost:3000/api/reviews/reviews/${reviewId}/replies`,
//         { content: replyContent[reviewId], authorId: userId },
//         { withCredentials: true }
//       );
//       setReviews(reviews.map(review =>
//         review._id === reviewId ? { ...review, replies: [...review.replies, response.data.reply] } : review
//       ));
//       setReplyContent({ ...replyContent, [reviewId]: '' });
//     } catch (error) {
//       setError(error.response?.data?.message || 'Failed to add reply');
//     }
//   };

//   const styles = {
//     container: {
//       fontFamily: 'Arial, sans-serif',
//       maxWidth: '800px',
//       margin: '0 auto',
//       padding: '20px',
//       backgroundColor: '#ffffff',
//     },
//     title: {
//       fontSize: '24px',
//       fontWeight: 'bold',
//       marginBottom: '20px',
//       color: '#333',
//     },
//     error: {
//       color: '#ff0000',
//       marginBottom: '10px',
//     },
//     reviewCard: {
//       border: '1px solid #e0e0e0',
//       borderRadius: '8px',
//       padding: '15px',
//       marginBottom: '20px',
//       backgroundColor: '#f9f9f9',
//     },
//     reviewHeader: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'flex-start',
//       marginBottom: '10px',
//     },
//     reviewAuthor: {
//       fontSize: '18px',
//       fontWeight: 'bold',
//       color: '#333',
//     },
//     starRating: {
//       color: '#ffd700',
//       marginRight: '5px',
//     },
//     reviewActions: {
//       display: 'flex',
//       gap: '10px',
//     },
//     button: {
//       padding: '5px 10px',
//       border: 'none',
//       borderRadius: '4px',
//       cursor: 'pointer',
//       fontSize: '14px',
//     },
//     deleteButton: {
//       backgroundColor: '#ff4d4d',
//       color: 'white',
//     },
//     editButton: {
//       backgroundColor: '#4d94ff',
//       color: 'white',
//     },
//     reviewContent: {
//       marginBottom: '15px',
//       color: '#555',
//     },
//     repliesContainer: {
//       marginTop: '10px',
//     },
//     replyItem: {
//       backgroundColor: '#e6e6e6',
//       padding: '10px',
//       borderRadius: '4px',
//       marginBottom: '5px',
//     },
//     replyForm: {
//       marginTop: '15px',
//     },
//     textarea: {
//       width: '100%',
//       padding: '10px',
//       borderRadius: '4px',
//       border: '1px solid #ccc',
//       marginBottom: '10px',
//     },
//     submitButton: {
//       backgroundColor: '#16A34A',
//       color: 'white',
//       border: 'none',
//       padding: '10px 15px',
//       borderRadius: '4px',
//       cursor: 'pointer',
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <h3 style={styles.title}>Reviews</h3>
//       {error && <p style={styles.error}>{error}</p>}
//       {reviews.length > 0 ? (
//         reviews.map((review) => (
//           <div key={review._id} style={styles.reviewCard}>
//             <div style={styles.reviewHeader}>
//               <div>
//                 <h4 style={styles.reviewAuthor}>{review.user.name}</h4>
//                 <div>
//                   {[...Array(5)].map((_, i) => (
//                     <span key={i} style={styles.starRating}>
//                       {i < review.rating ? '★' : '☆'}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               <div style={styles.reviewActions}>
//                 <button onClick={() => handleDelete(review._id)} style={{...styles.button, ...styles.deleteButton}}>
//                   Delete
//                 </button>
//                 <button onClick={() => handleUpdate(review._id)} style={{...styles.button, ...styles.editButton}}>
//                   Edit
//                 </button>
//               </div>
//             </div>
//             <p style={styles.reviewContent}>{review.comment}</p>
//             {Array.isArray(review.replies) && review.replies.length > 0 && (
//               <div style={styles.repliesContainer}>
//                 <h5>Replies:</h5>
//                 {review.replies.map((reply) => (
//                   <div key={reply._id} style={styles.replyItem}>
//                     <p>{reply.content}</p>
//                     <p style={{ fontSize: '12px', color: '#777' }}>- {reply.author.name}</p>
//                   </div>
//                 ))}
//               </div>
//             )}
//             <div style={styles.replyForm}>
//               <textarea
//                 placeholder="Write your reply..."
//                 value={replyContent[review._id] || ''}
//                 onChange={(e) => setReplyContent({ ...replyContent, [review._id]: e.target.value })}
//                 style={styles.textarea}
//               />
//               <button onClick={() => handleReply(review._id)} style={styles.submitButton}>
//                 Send Reply
//               </button>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>No reviews yet</p>
//       )}
//     </div>
//   );
// };

// export default ReviewsList;
////////////////////////////////////////////////////////////////////////////////// new 
import  { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Star, Edit2, Trash2, MessageCircle, Send, User ,  Flag, } from 'lucide-react';
import Swal from 'sweetalert2';

const ReviewsList = ({ recipeId }) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState("");
  const [replyContent, setReplyContent] = useState({});
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [reportReason, setReportReason] = useState("");
  const [reportTarget, setReportTarget] = useState({ id: null, type: null });

  useEffect(() => {
    fetchReviews();
  }, [recipeId]);

  const fetchReviews = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/reviews/recipes/${recipeId}/reviews`
      );
      const reviewsData = response.data;
      if (Array.isArray(reviewsData)) {
        setReviews(reviewsData);
        const initialReplyContent = {};
        reviewsData.forEach((review) => {
          initialReplyContent[review._id] = "";
        });
        setReplyContent(initialReplyContent);
      } else {
        setReviews([]);
      }
    } catch (error) {
      showErrorAlert("Failed to load reviews");
    }
  };

  const handleDelete = async (reviewId) => {
    try {
      await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#16A34A",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.put(
            `http://localhost:3000/api/reviews/reviews/${reviewId}`,
            {},
            { withCredentials: true }
          );
          setReviews(reviews.filter((review) => review._id !== reviewId));
          Swal.fire("Deleted!", "Your review has been deleted.", "success");
        }
      });
    } catch (error) {
      showErrorAlert("Failed to delete review");
    }
  };

  const handleUpdate = async (reviewId) => {
    try {
      const { value: formValues } = await Swal.fire({
        title: "Update Review",
        html:
          '<input id="swal-input1" class="swal2-input" placeholder="New comment">' +
          '<input id="swal-input2" class="swal2-input" placeholder="New rating (1-5)">',
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById("swal-input1").value,
            document.getElementById("swal-input2").value,
          ];
        },
      });

      if (formValues) {
        const [newComment, newRating] = formValues;
        if (!newComment || !newRating) return;

        const response = await axios.put(
          `http://localhost:3000/api/reviews/update/${reviewId}`,
          { comment: newComment, rating: parseInt(newRating) },
          { withCredentials: true }
        );
        setReviews(
          reviews.map((review) =>
            review._id === reviewId ? response.data.review : review
          )
        );
        Swal.fire("Updated!", "Your review has been updated.", "success");
      }
    } catch (error) {
      showErrorAlert("Failed to update review");
    }
  };

  const handleReply = async (reviewId) => {
    if (!replyContent[reviewId]) return;

    try {
      const userId = Cookies.get("user_id");
      const response = await axios.post(
        `http://localhost:3000/api/reviews/reviews/${reviewId}/replies`,
        { content: replyContent[reviewId], authorId: userId },
        { withCredentials: true }
      );
      setReviews(
        reviews.map((review) =>
          review._id === reviewId
            ? { ...review, replies: [...review.replies, response.data.reply] }
            : review
        )
      );
      setReplyContent({ ...replyContent, [reviewId]: "" });
      Swal.fire("Reply Added!", "Your reply has been posted.", "success");
    } catch (error) {
      showErrorAlert("Failed to add reply");
    }
  };

  const handleReportReview = (reviewId) => {
    setReportTarget({ id: reviewId, type: "review" });
    setIsReportModalOpen(true);
  };

  const handleReportReply = (replyId) => {
    setReportTarget({ id: replyId, type: "reply" });
    setIsReportModalOpen(true);
  };

  const closeReportModal = () => {
    setIsReportModalOpen(false);
    setReportReason("");
    setReportTarget({ id: null, type: null });
  };

  const submitReport = async () => {
    if (!reportReason.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Reason required",
        text: "Please provide a reason for reporting.",
      });
      return;
    }

    try {
      const endpoint = `http://localhost:3000/api/reports/${reportTarget.id}`;
      const reportData = {
        reportableType: reportTarget.type === "review" ? "Review" : "Reply",
        reason: reportReason,
      };

      await axios.post(endpoint, reportData, { withCredentials: true });

      Swal.fire({
        icon: "success",
        title: "Report Submitted",
        text: `Thank you for reporting this ${reportTarget.type}. We'll review it shortly.`,
      });
      closeReportModal();
    } catch (error) {
      console.error("Error submitting report:", error);
      Swal.fire({
        icon: "error",
        title: "Failed to submit report",
        text: "There was an error submitting your report. Please try again.",
      });
    }
  };

  const showErrorAlert = (message) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: message,
    });
  };

  return (
    <div className="space-y-6">
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div
            key={review._id}
            className="bg-gray-50 p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-800">
                  {review.user?.name}
                </h4>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={
                        i < review.rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleUpdate(review._id)}
                  className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
                >
                  <Edit2 size={16} />
                </button>
                <button
                  onClick={() => handleDelete(review._id)}
                  className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300"
                >
                  <Trash2 size={16} />
                </button>
                <button
                  onClick={() => handleReportReview(review._id)}
                  className="p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-300"
                  title="Report this review"
                >
                  <Flag size={16} />
                </button>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{review.comment}</p>
            {Array.isArray(review.replies) && review.replies.length > 0 && (
              <div className="mt-4 space-y-2">
                <h5 className="font-semibold text-gray-700">Replies:</h5>
                {review.replies.map((reply) => (
                  <div
                    key={reply._id}
                    className="bg-white p-3 rounded-md shadow"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <User size={16} className="text-[#16A34A] mr-2" />
                        <span className="font-semibold text-[#16A34A]">
                          {reply.author?.name}
                        </span>
                      </div>
                      <button
                        onClick={() => handleReportReview(reply._id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                        title="Report this reply"
                      >
                        <Flag size={16} />
                      </button>
                    </div>
                    <p className="text-gray-600">{reply.content}</p>
                  </div>
                ))}
              </div>
            )}
            <div className="mt-4">
              <textarea
                placeholder="Write your reply..."
                value={replyContent[review._id] || ""}
                onChange={(e) =>
                  setReplyContent({
                    ...replyContent,
                    [review._id]: e.target.value,
                  })
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button
                onClick={() => handleReply(review._id)}
                className="mt-2 flex items-center justify-center w-full p-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
              >
                <MessageCircle size={18} className="mr-2" />
                Send Reply
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-600">
          No reviews yet for this salad. Be the first to share your thoughts!
        </p>
      )}

      {isReportModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-96">
            <h2 className="text-2xl font-bold mb-4 text-red-500">
              Report {reportTarget.type === "review" ? "Review" : "Reply"}
            </h2>
            <label className="block text-lg mb-2 text-gray-700">
              Reason for reporting:
            </label>
            <textarea
              value={reportReason}
              onChange={(e) => setReportReason(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
              rows="4"
              placeholder="Enter the reason for reporting"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={closeReportModal}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={submitReport}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Submit Report
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewsList;

// return (
//   <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
//     <h3 className="text-3xl font-bold mb-6 text-gray-800">Salad Reviews</h3>
//     {error && <p className="text-red-500 mb-4">{error}</p>}
//     {reviews.length > 0 ? (
//       <div className="space-y-6">
//         {reviews.map((review) => (
//           <div key={review._id} className="bg-gray-50 p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
//             <div className="flex justify-between items-start mb-4">
//               <div>
//                 <h4 className="text-xl font-semibold text-gray-800">{review.user.name}</h4>
//                 <div className="flex items-center mt-1">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} size={20} className={i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"} />
//                   ))}
//                 </div>
//               </div>
//               <div className="flex space-x-2">
//                 <button onClick={() => handleUpdate(review._id)} className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
//                   <Edit2 size={16} />
//                 </button>
//                 <button onClick={() => handleDelete(review._id)} className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300">
//                   <Trash2 size={16} />
//                 </button>
//               </div>
//             </div>
//             <p className="text-gray-600 mb-4">{review.comment}</p>
//             {Array.isArray(review.replies) && review.replies.length > 0 && (
//               <div className="mt-4 space-y-2">
//                 <h5 className="font-semibold text-gray-700">Replies:</h5>
//                 {review.replies.map((reply) => (
//                   <div key={reply._id} className="bg-white p-3 rounded-md shadow">
//                     <p className="text-gray-600">{reply.content}</p>
//                     <p className="text-sm text-gray-500 mt-1">- {reply.author.name}</p>
//                   </div>
//                 ))}
//               </div>
//             )}
//             <div className="mt-4">
//               <textarea
//                 placeholder="Write your reply..."
//                 value={replyContent[review._id] || ''}
//                 onChange={(e) => setReplyContent({ ...replyContent, [review._id]: e.target.value })}
//                 className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
//               />
//               <button
//                 onClick={() => handleReply(review._id)}
//                 className="mt-2 flex items-center justify-center w-full p-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
//               >
//                 <MessageCircle size={18} className="mr-2" />
//                 Send Reply
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     ) : (
//       <p className="text-gray-600">No reviews yet for this salad. Be the first to share your thoughts!</p>
//     )}
//   </div>
// );
// };

// export default ReviewsList;
