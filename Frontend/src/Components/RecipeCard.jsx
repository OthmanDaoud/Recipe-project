// import { Link } from "react-router-dom"; // تأكد من أنك تستخدم React Router

// const RecipeCard = ({ recipe }) => {
//   return (
//     <div className="rounded overflow-hidden shadow-lg flex flex-col">
//       <div className="relative">
//         <img className="w-full" src={recipe.photos[0]} alt={recipe.title} />
//         <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
//         <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
//           <Link
//             to={`/recipe/${recipe._id}`} // رابط إلى صفحة التفاصيل باستخدام معرف الوصفة
//             className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
//           >
//             Cook
//           </Link>
//         </div>
//       </div>
//       <div className="px-6 py-4 mb-auto">
//         {recipe.title}
//         <p className="text-gray-500 text-sm">{recipe.description}</p>
//       </div>
//       <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
//         <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
//           {/* أيقونة وقت التحضير */}
//           Prep Time: {recipe.cookingTime}min
//         </span>
//         <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
//           {/* أيقونة نوع المطبخ */}
//           Cuisine: {recipe.cuisineType}
//         </span>
//       </div>
//     </div>
//   );
// };

// export default RecipeCard;
////////////////////////////////////////////////////////////////////////////////////////////
// import { Link } from "react-router-dom"; // تأكد من أنك تستخدم React Router

// const RecipeCard = ({ recipe }) => {
//   // تحقق من وجود الحقول المطلوبة في الـ recipe
//   const { photos = [], title = '', description = '', _id = '', cookingTime = '', cuisineType = '' } = recipe;

//   return (
//     <div className="rounded overflow-hidden shadow-lg flex flex-col">
//       <div className="relative">
//         {/* تحقق من وجود الصور */}
//         <img className="w-full" src={photos[0] || 'default-image.jpg'} alt={title || 'Recipe'} />
//         <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
//         <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
//           <Link
//             to={`/recipe/${_id}`} // رابط إلى صفحة التفاصيل باستخدام معرف الوصفة
//             className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
//           >
//             Cook
//           </Link>
//         </div>
//       </div>
//       <div className="px-6 py-4 mb-auto">
//         <h2 className="text-xl font-semibold mb-2">{title || 'Recipe Title'}</h2>
//         <p className="text-gray-500 text-sm">{description || 'Description not available'}</p>
//       </div>
//       <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
//         <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
//           {/* أيقونة وقت التحضير */}
//           Prep Time: {cookingTime || 'N/A'} min
//         </span>
//         <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
//           {/* أيقونة نوع المطبخ */}
//           Cuisine: {cuisineType || 'N/A'}
//         </span>
//       </div>
//     </div>
//   );
// };

// export default RecipeCard;
///////////////////////////////////////////////////////////////////////////////////////////// نسخه اخيره
// import { Link } from "react-router-dom";
// import { Clock, Users, Salad } from 'lucide-react'; // تأكد من استخدام الأيقونات بشكل صحيح

// const RecipeCard = ({ recipe }) => {
//   const { photos = [], title = '', description = '', _id = '', cookingTime = '', cuisineType = '' } = recipe;

//   return (
//     <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
//       <div className="relative">
//         <img className="w-full h-48 object-cover" src={photos[0] || 'default-image.jpg'} alt={title || 'Recipe'} />
//         <div className="absolute top-0 right-0 bg-[#16A34A] text-white px-3 py-1 rounded-bl-lg font-semibold">
//           {cuisineType || 'Unknown Cuisine'}
//         </div>
//       </div>
//       <div className="p-6">
//         <h2 className="text-2xl font-bold mb-3 text-gray-800">{title || 'Recipe Title'}</h2>
//         <p className="text-gray-600 mb-4">{description.substring(0, 100)}...</p>
//         <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
//           <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {cookingTime || 'N/A'} min</span>
//           <span className="flex items-center"><Users className="w-4 h-4 mr-1" /> {recipe.servings || 'N/A'} servings</span>
//           <span className="flex items-center"><Salad className="w-4 h-4 mr-1" /> {recipe.rating || 'N/A'}</span>
//         </div>
//         <Link
//        to={`/recipe/${recipe._id}`}
//        className="w-full bg-[#16A34A] hover:bg-[#86EFAC] text-white font-bold py-3 px-4 rounded-full transition-colors duration-300 flex items-center justify-center"
//        >
//           <Salad className="mr-2" /> Cook Now
//        </Link>
//       </div>
//     </div>
//   );
// };

// export default RecipeCard;
// import { Link } from "react-router-dom";
// import { Clock, Users, Salad } from 'lucide-react'; // تأكد من استخدام الأيقونات بشكل صحيح

// const RecipeCard = ({ recipe }) => {
//   const { photos = [], title = '', description = '', _id = '', cookingTime = '', cuisineType = '' } = recipe;

//   return (
//     <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
//       <div className="relative flex-shrink-0">
//         <img className="w-full h-56 object-cover" src={photos[0] || 'default-image.jpg'} alt={title || 'Recipe'} />
//         <div className="absolute top-0 right-0 bg-[#16A34A] text-white px-3 py-1 rounded-bl-lg font-semibold">
//           {cuisineType || 'Unknown Cuisine'}
//         </div>
//         <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 ease-in-out hover:opacity-0"></div>
//       </div>
//       <div className="flex-grow p-6">
//         <h2 className="text-2xl font-bold mb-3 text-gray-800">{title || 'Recipe Title'}</h2>
//         {/* <p className="text-gray-600 mb-4">{description.substring(0, 100)}...</p> */}
//         <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
//           <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {cookingTime || 'N/A'} min</span>
//           <span className="flex items-center"><Users className="w-4 h-4 mr-1" /> {recipe.servings || 'N/A'} servings</span>
//           {/* <span className="flex items-center"><Salad className="w-4 h-4 mr-1" /> {recipe.rating || 'N/A'}</span> */}
//         </div>
//       </div>
//       <div className="p-6">
//         <Link
//           to={`/recipe/${_id}`}
//           className="w-full bg-[#16A34A] hover:bg-[#86EFAC] text-white font-bold py-3 px-4 rounded-full transition-colors duration-300 flex items-center justify-center"
//         >
//           <Salad className="mr-2" /> Cook Now
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default RecipeCard;
/////////////////////////////////////////////////////////
// import { useState } from 'react';
// import { Link } from "react-router-dom";
// import { Clock, Users, Salad, Heart } from 'lucide-react'; // تأكد من استخدام الأيقونات بشكل صحيح
// import axios from 'axios';
// import Cookies from 'js-cookie';

// const RecipeCard = ({ recipe }) => {
//   const { photos = [], title = '', description = '', _id = '', cookingTime = '', cuisineType = '' } = recipe;

//   // افترض أن الـ userId يتم جلبه من Context أو من الـ localStorage أو أي مصدر آخر
//   const userId = Cookies.get('user_id'); // استبدله بالـ userId الفعلي
//     const token = Cookies.get('token');
//   const [isFavorite, setIsFavorite] = useState(false); // لتتبع حالة الإضافة إلى المفضلة

//   const handleAddToFavorites = async () => {
//     try {
//       await axios.post('http://localhost:3000/api/favorites/add', { token,userId, recipeId: _id });
//       setIsFavorite(true),
//       { withCredentials: true }
//     } catch (error) {
//       console.error('Error adding recipe to favorites:', error);
//     }
//   };

//   return (
//     <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full relative">
//       <div className="relative flex-shrink-0">
//         <img className="w-full h-56 object-cover" src={photos[0] || 'default-image.jpg'} alt={title || 'Recipe'} />
//         <div className="absolute top-0 right-0 bg-[#16A34A] text-white px-3 py-1 rounded-bl-lg font-semibold">
//           {cuisineType || 'Unknown Cuisine'}
//         </div>
//         <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 ease-in-out hover:opacity-0"></div>
//         <button
//           className={`absolute bottom-4 right-4 p-2 ${isFavorite ? 'text-red-500' : 'text-gray-500'} transition-colors duration-300 z-10`}
//           onClick={handleAddToFavorites}
//         >
//           <Heart className="w-6 h-6" />
//         </button>
//       </div>
//       <div className="flex-grow p-6">
//         <h2 className="text-2xl font-bold mb-3 text-gray-800">{title || 'Recipe Title'}</h2>
//         {/* <p className="text-gray-600 mb-4">{description.substring(0, 100)}...</p> */}
//         <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
//           <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {cookingTime || 'N/A'} min</span>
//           <span className="flex items-center"><Users className="w-4 h-4 mr-1" /> {recipe.servings || 'N/A'} servings</span>
//           {/* <span className="flex items-center"><Salad className="w-4 h-4 mr-1" /> {recipe.rating || 'N/A'}</span> */}
//         </div>
//       </div>
//       <div className="p-6">
//         <Link
//           to={`/recipe/${_id}`}
//           className="w-full bg-[#16A34A] hover:bg-[#86EFAC] text-white font-bold py-3 px-4 rounded-full transition-colors duration-300 flex items-center justify-center"
//         >
//           <Salad className="mr-2" /> Cook Now
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default RecipeCard;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { useState } from 'react';
// import { Link } from "react-router-dom";
// import { Clock, Users, Salad, Heart } from 'lucide-react'; // تأكد من استخدام الأيقونات بشكل صحيح
// import axios from 'axios';
// import Cookies from 'js-cookie';

// const RecipeCard = ({ recipe }) => {
//   const { photos = [], title = '', description = '', _id = '', cookingTime = '', cuisineType = '' } = recipe;

//   const [isFavorite, setIsFavorite] = useState(false); // لتتبع حالة الإضافة إلى المفضلة
//   // const handleAddToFavorites = async () => {
//   //   try {
//   //     const userId = Cookies.get('user_id');
//   //     const token = Cookies.get('token');
//   //     console.log(userId)
//   //      console.log(token)
//   //     await axios.post('http://localhost:3000/api/favorites/add', 
//   //       { recipeId: _id }, 
//   //       { withCredentials: true } 
//   //     );
//   //     setIsFavorite(true);
//   //   } catch (error) {
//   //     console.error('Error adding recipe to favorites:', error);
//   //   }
//   // };

//   const handleAddToFavorites = async () => {
//     try {
     
  
//       await axios.post('http://localhost:3000/api/favorites/add', 
//         { recipeId: _id }, 
//         { withCredentials: true } 
//       );
//       setIsFavorite(true);
//     } catch (error) {
//       console.error('Error adding recipe to favorites:', error);
//     }
//   };
  
//   return (
//     <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full relative">
//       <div className="relative flex-shrink-0">
//         <img className="w-full h-56 object-cover" src={photos[0] || 'default-image.jpg'} alt={title || 'Recipe'} />
//         <div className="absolute top-0 right-0 bg-[#16A34A] text-white px-3 py-1 rounded-bl-lg font-semibold">
//           {cuisineType || 'Unknown Cuisine'}
//         </div>
//         <div className="absolute inset-0  opacity-50 transition-opacity duration-300 ease-in-out hover:bg-black"></div>
//         <button 
//           className={`absolute bottom-4 right-4 p-2 ${isFavorite ? 'text-red-500' : 'text-gray-500'} transition-colors duration-300 z-10`}
//           onClick={handleAddToFavorites}
//         >
//           <Heart className="w-6 h-6" />
//         </button>
//       </div>
//       <div className="flex-grow p-6">
//         <h2 className="text-2xl font-bold mb-3 text-gray-800">{title || 'Recipe Title'}</h2>
//         <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
//           <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {cookingTime || 'N/A'} min</span>
//           <span className="flex items-center"><Users className="w-4 h-4 mr-1" /> {recipe.servings || 'N/A'} servings</span>
//         </div>
//       </div>
//       <div className="p-6">
//         <Link
//           to={`/recipe/${_id}`}
//           className="w-full bg-[#16A34A] hover:bg-[#86EFAC] text-white font-bold py-3 px-4 rounded-full transition-colors duration-300 flex items-center justify-center"
//         >
//           <Salad className="mr-2" /> Show More
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default RecipeCard;
//////////////////////////////////////////////////////////////////////////////////////////////////////////
import { useState } from 'react';
import { Link } from "react-router-dom";
import { Clock, Users, Salad, Heart, Star } from 'lucide-react'; // إضافة أيقونة التقييم
import axios from 'axios';
import Cookies from 'js-cookie';

const RecipeCard = ({ recipe }) => {
  const { photos = [], title = '', description = '', _id = '', cookingTime = '', cuisineType = '', averageRating = 0 } = recipe; // إضافة `averageRating`

  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToFavorites = async () => {
    try {
      await axios.post('http://localhost:3000/api/favorites/add', 
        { recipeId: _id }, 
        { withCredentials: true } 

      );
      setIsFavorite(true);
    } catch (error) {
      console.error("Error adding recipe to favorites:", error);
    }
  };
  
  // دالة لعرض النجوم حسب متوسط التقييم
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star key={i} className={`w-4 h-4 ${i <= averageRating ? 'text-yellow-400' : 'text-gray-300'}`} />
      );
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full relative">
      <div className="relative flex-shrink-0">
        <img
          className="w-full h-56 object-cover"
          src={photos[0] || "default-image.jpg"}
          alt={title || "Recipe"}
        />
        <div className="absolute top-0 right-0 bg-[#16A34A] text-white px-3 py-1 rounded-bl-lg font-semibold">
          {cuisineType || "Unknown Cuisine"}
        </div>
        <div className="absolute inset-0 opacity-50 transition-opacity duration-300 ease-in-out hover:bg-black"></div>
        {/* <button 
          className={`absolute bottom-4 right-4 p-2 ${isFavorite ? 'text-red-500' : 'text-gray-500'} transition-colors duration-300 z-10`}
        <div className="absolute inset-0 opacity-50 transition-opacity duration-300 ease-in-out hover:bg-black "></div>
        <button
          className={`absolute bottom-4 right-4 p-2 ${
            isFavorite ? "text-red-500" : "text-gray-500"
          } transition-colors duration-300 z-10`}
          onClick={handleAddToFavorites}
        >
          <Heart className="w-6 h-6 " />
        </button> */}
        <button 
  className={`absolute bottom-4 right-4 p-2 ${isFavorite ? 'bg-red-100 text-red-500' : 'bg-gray-100 text-gray-500'} transition-colors duration-300 z-10 rounded-full`}
  onClick={handleAddToFavorites}
>
  <Heart className="w-6 h-6" />
</button>

      </div>
      <div className="flex-grow p-6">
        <h2 className="text-2xl font-bold mb-3 text-gray-800">
          {title || "Recipe Title"}
        </h2>
        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
          <span className="flex items-center">
            <Clock className="w-4 h-4 mr-1" /> {cookingTime || "N/A"} min
          </span>
          <span className="flex items-center">
            <Users className="w-4 h-4 mr-1" /> {recipe.servings || "N/A"}{" "}
            servings
          </span>
        </div>

        {/* إضافة التقييم */}
        <div className="flex items-center mb-4">
          {renderStars()} {/* عرض النجوم */}
          <span className="ml-2 text-gray-500">{averageRating.toFixed(1)} / 5</span>
        </div>
      </div>
      <div className="p-6">
        <Link
          to={`/recipe/${_id}`}
          className="w-full bg-[#16A34A] hover:bg-[#86EFAC] text-white font-bold py-3 px-4 rounded-full transition-colors duration-300 flex items-center justify-center"
        >
          <Salad className="mr-2" /> Show More
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
