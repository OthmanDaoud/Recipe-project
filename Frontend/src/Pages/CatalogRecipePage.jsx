
// import useRecipes from '../Hooks/useRecipes';
// import RecipeCard from '../Components/RecipeCard';

// const CatalogPage = () => {
//   const { recipes, loading, error } = useRecipes();

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error fetching recipes: {error.message}</p>;

//   return (
//     <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
//       <div className="border-b mb-5 flex justify-between text-sm">
//         <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
//           {/* أيقونة عنوان الكتالوج */}
//           Recipes Catalog
//         </div>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
//         {recipes.map((recipe) => (
//           <RecipeCard key={recipe.id} recipe={recipe} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CatalogPage;
// src/Pages/CatalogPage.js
// import { useState } from 'react';
// import useRecipes from '../Hooks/useRecipes';
// import useCategories from '../Hooks/useCategories';
// import RecipeCard from '../Components/RecipeCard';

// const CatalogPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const { recipes, loading: recipesLoading, error: recipesError } = useRecipes(selectedCategory);
//   const { categories, loading: categoriesLoading, error: categoriesError } = useCategories();

//   if (recipesLoading || categoriesLoading) return <p>Loading...</p>;
//   if (recipesError || categoriesError) return <p>Error: {recipesError?.message || categoriesError?.message}</p>;

//   const handleCategoryChange = (event) => {
//     setSelectedCategory(event.target.value);
//   };

//   return (
//     <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
//       <div className="border-b mb-5 flex justify-between text-sm">
//         <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
//           {/* أيقونة عنوان الكتالوج */}
//           Recipes Catalog
//         </div>
//       </div>
//       <div className="mb-5">
//         <select
//           value={selectedCategory}
//           onChange={handleCategoryChange}
//           className="border p-2 rounded"
//         >
//           <option value="">All Categories</option>
//           {categories.map((category) => (
//             <option key={category._id} value={category._id}>
//               {category.name}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
//         {recipes.map((recipe) => (
//           <RecipeCard key={recipe._id} recipe={recipe} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CatalogPage;
// src/Pages/CatalogPage.js
/////////////////////////////////////////////////////////////////////////////////////////////الكود الصحيح 
// import { useState } from 'react';
// import useRecipes from '../Hooks/useRecipes';
// import useCategories from '../Hooks/useCategories';
// import RecipeCard from '../Components/RecipeCard';

// const CatalogPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState(''); // الاحتفاظ بالفئة المختارة
//   const { recipes, loading: recipesLoading, error: recipesError } = useRecipes(selectedCategory); // تمرير الفئة المختارة إلى useRecipes
//   const { categories, loading: categoriesLoading, error: categoriesError } = useCategories();

//   if (recipesLoading || categoriesLoading) return <p>Loading...</p>;
//   if (recipesError || categoriesError) return <p>Error: {recipesError?.message || categoriesError?.message}</p>;

//   const handleCategoryChange = (event) => {
//     setSelectedCategory(event.target.value); // تحديث الفئة المختارة عند التغيير
//   };

//   return (
//     <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
//       <div className="border-b mb-5 flex justify-between text-sm">
//         <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
//           Recipes Catalog
//         </div>
//       </div>
//       <div className="mb-5">
//         <select
//           value={selectedCategory}
//           onChange={handleCategoryChange}
//           className="border p-2 rounded"
//         >
//           <option value="">All Categories</option>
//           {categories.map((category) => (
//             <option key={category._id} value={category._id}>
//               {category.name}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
//         {recipes.map((recipe) => (
//           <RecipeCard key={recipe._id} recipe={recipe} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CatalogPage;
////////////////////////////////////////////////////////////////////////////////
// import React, { useState } from 'react';
// import useRecipes from '../Hooks/useRecipes';
// import useCategories from '../Hooks/useCategories';
// import RecipeCard from '../Components/RecipeCard';
// import { Salad, ChefHat, Loader2 } from 'lucide-react';

// const CatalogPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const { recipes, loading: recipesLoading, error: recipesError } = useRecipes(selectedCategory);
//   const { categories, loading: categoriesLoading, error: categoriesError } = useCategories();

//   if (recipesLoading || categoriesLoading) return (
//     <div className="flex items-center justify-center h-screen">
//       <Loader2 className="w-10 h-10 animate-spin text-[#16A34A]" />
//     </div>
//   );
//   if (recipesError || categoriesError) return <p className="text-red-500 text-center mt-10">Error: {recipesError?.message || categoriesError?.message}</p>;

//   const handleCategoryChange = (event) => {
//     setSelectedCategory(event.target.value);
//   };

//   return (
//     <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 bg-gray-100">
//       <div className="flex items-center justify-between mb-8">
//         <h1 className="text-3xl font-bold text-[#16A34A] flex items-center">
//           <ChefHat className="mr-2" /> Recipe Catalog
//         </h1>
//         <select
//           value={selectedCategory}
//           onChange={handleCategoryChange}
//           className="border p-2 rounded-md shadow-sm focus:ring-2 focus:ring-[#86EFAC] focus:border-[#16A34A] transition-all"
//         >
//           <option value="">All Categories</option>
//           {categories.map((category) => (
//             <option key={category._id} value={category._id}>
//               {category.name}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {recipes.map((recipe) => (
//           <div key={recipe._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between" style={{minHeight: '350px'}}>
//             <RecipeCard recipe={recipe} />
//           </div>
//         ))}
//       </div>
//       {recipes.length === 0 && (
//         <div className="text-center mt-10">
//           <Salad className="w-16 h-16 mx-auto text-[#16A34A] mb-4" />
//           <p className="text-gray-600">No recipes found in this category. Try selecting a different one!</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CatalogPage;
/////////////////////////////////////////////////////////////////////////////
// import React, { useState } from 'react';
// import useRecipes from '../Hooks/useRecipes';
// import useCategories from '../Hooks/useCategories';
// import { Salad, ChefHat, Loader2, Clock, Users, ThumbsUp } from 'lucide-react';

// const CatalogPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const { recipes, loading: recipesLoading, error: recipesError } = useRecipes(selectedCategory);
//   const { categories, loading: categoriesLoading, error: categoriesError } = useCategories();

//   if (recipesLoading || categoriesLoading) return (
//     <div className="flex items-center justify-center h-screen">
//       <Loader2 className="w-12 h-12 animate-spin text-[#16A34A]" />
//     </div>
//   );
//   if (recipesError || categoriesError) return <p className="text-red-500 text-center mt-10 font-semibold">Error: {recipesError?.message || categoriesError?.message}</p>;

//   const handleCategoryChange = (event) => {
//     setSelectedCategory(event.target.value);
//   };

//   return (
//     <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 bg-gradient-to-b from-green-50 to-white">
//       <div className="flex items-center justify-between mb-12">
//         <h1 className="text-4xl font-extrabold text-[#16A34A] flex items-center">
//           <ChefHat className="mr-3 w-10 h-10" /> Recipe Catalog
//         </h1>
//         <select
//           value={selectedCategory}
//           onChange={handleCategoryChange}
//           className="border-2 border-[#16A34A] p-3 rounded-full text-[#16A34A] font-semibold focus:ring-2 focus:ring-[#86EFAC] focus:border-[#16A34A] transition-all"
//         >
//           <option value="">All Categories</option>
//           {categories.map((category) => (
//             <option key={category._id} value={category._id}>
//               {category.name}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {recipes.map((recipe) => (
//           <div key={recipe._id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
//             <div className="relative">
//               <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" />
//               <div className="absolute top-0 right-0 bg-[#16A34A] text-white px-3 py-1 rounded-bl-lg font-semibold">
//                 {recipe.category}
//               </div>
//             </div>
//             <div className="p-6">
//               <h2 className="text-2xl font-bold mb-3 text-gray-800">{recipe.name}</h2>
//               <p className="text-gray-600 mb-4">{recipe.description.substring(0, 100)}...</p>
//               <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
//                 <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {recipe.cookTime} min</span>
//                 <span className="flex items-center"><Users className="w-4 h-4 mr-1" /> {recipe.servings} servings</span>
//                 <span className="flex items-center"><ThumbsUp className="w-4 h-4 mr-1" /> {recipe.rating}</span>
//               </div>
//               <button 
//                 className="w-full bg-[#16A34A] hover:bg-[#86EFAC] text-white font-bold py-3 px-4 rounded-full transition-colors duration-300 flex items-center justify-center"
//                 onClick={() => console.log(`Cooking ${recipe.name}`)}
//               >
//                 <Salad className="mr-2" /> Cook Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       {recipes.length === 0 && (
//         <div className="text-center mt-16">
//           <Salad className="w-24 h-24 mx-auto text-[#16A34A] mb-6" />
//           <p className="text-xl text-gray-600 font-semibold">No recipes found in this category. Try selecting a different one!</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CatalogPage;
////////////////////////////////////////////////////////////الاعلى التصميم الصحيح
// import { useState } from 'react';
// import useRecipes from '../Hooks/useRecipes';
// import useCategories from '../Hooks/useCategories';
// import RecipeCard from '../Components/RecipeCard';
// import { Salad, ChefHat, Loader2 } from 'lucide-react';

// const CatalogPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const { recipes, loading: recipesLoading, error: recipesError } = useRecipes(selectedCategory);
//   const { categories, loading: categoriesLoading, error: categoriesError } = useCategories();

//   if (recipesLoading || categoriesLoading) return (
//     <div className="flex items-center justify-center h-screen">
//       <Loader2 className="w-10 h-10 animate-spin text-[#16A34A]" />
//     </div>
//   );
//   if (recipesError || categoriesError) return <p className="text-red-500 text-center mt-10">Error: {recipesError?.message || categoriesError?.message}</p>;

//   const handleCategoryChange = (event) => {
//     setSelectedCategory(event.target.value);
//   };

//   return (
//     <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 bg-gradient-to-b from-green-50 to-white">
//       <div className="border-b mb-8 pb-4 flex justify-between items-center">
//         <div className="text-[#16A34A] flex items-center text-2xl font-bold uppercase">
//           <ChefHat className="mr-2 w-8 h-8" /> Recipes Catalog
//         </div>
//         <select
//           value={selectedCategory}
//           onChange={handleCategoryChange}
//           className="border-2 border-[#16A34A] p-2 rounded-md text-[#16A34A] focus:ring-2 focus:ring-[#86EFAC] focus:border-[#16A34A] transition-all"
//         >
//           <option value="">All Categories</option>
//           {categories.map((category) => (
//             <option key={category._id} value={category._id}>
//               {category.name}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {recipes.map((recipe) => (
//           <div key={recipe._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
//             <RecipeCard recipe={recipe} />
//           </div>
//         ))}
//       </div>
//       {recipes.length === 0 && (
//         <div className="text-center mt-10">
//           <Salad className="w-16 h-16 mx-auto text-[#16A34A] mb-4" />
//           <p className="text-gray-600 font-semibold">No recipes found in this category. Try selecting a different one!</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CatalogPage;

// import { useState } from 'react';
// import useRecipes from '../Hooks/useRecipes';
// import useCategories from '../Hooks/useCategories';
// import RecipeCard from '../Components/RecipeCard';

// const CatalogPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState(''); // الاحتفاظ بالفئة المختارة
//   const { recipes, loading: recipesLoading, error: recipesError } = useRecipes(selectedCategory); // تمرير الفئة المختارة إلى useRecipes
//   const { categories, loading: categoriesLoading, error: categoriesError } = useCategories();

//   if (recipesLoading || categoriesLoading) return <p>Loading...</p>;
//   if (recipesError || categoriesError) return <p>Error: {recipesError?.message || categoriesError?.message}</p>;

//   const handleCategoryChange = (event) => {
//     setSelectedCategory(event.target.value); // تحديث الفئة المختارة عند التغيير
//   };

//   return (
//     <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 bg-gradient-to-b from-green-50 to-white">
//       <div className="flex items-center justify-between mb-12">
//         <h1 className="text-4xl font-extrabold text-[#16A34A] flex items-center">
//           {/* رمز الطبخ هنا */}
//           Recipe Catalog
//         </h1>
//         <select
//           value={selectedCategory}
//           onChange={handleCategoryChange}
//           className="border-2 border-[#16A34A] p-3 rounded-full text-[#16A34A] font-semibold focus:ring-2 focus:ring-[#86EFAC] focus:border-[#16A34A] transition-all"
//         >
//           <option value="">All Categories</option>
//           {categories.map((category) => (
//             <option key={category._id} value={category._id}>
//               {category.name}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {recipes.map((recipe) => (
//           <RecipeCard key={recipe._id} recipe={recipe} />
//         ))}
//       </div>
//       {recipes.length === 0 && (
//         <div className="text-center mt-16">
//           {/* رمز الطبخ هنا */}
//           <p className="text-xl text-gray-600 font-semibold">No recipes found in this category. Try selecting a different one!</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CatalogPage;
////////////////////////////////////////////////////////////////////////////////////////
// import  { useState } from 'react';
// import useRecipes from '../Hooks/useRecipes';
// import useCategories from '../Hooks/useCategories';
// import RecipeCard from '../Components/RecipeCard';
// import { Salad, ChefHat, Loader2 } from 'lucide-react';

// const CatalogPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const { recipes, loading: recipesLoading, error: recipesError } = useRecipes(selectedCategory);
//   const { categories, loading: categoriesLoading, error: categoriesError } = useCategories();

//   if (recipesLoading || categoriesLoading) return (
//     <div className="flex items-center justify-center h-screen">
//       <Loader2 className="w-12 h-12 animate-spin text-[#16A34A]" />
//     </div>
//   );
//   if (recipesError || categoriesError) return <p className="text-red-500 text-center mt-10 font-semibold">Error: {recipesError?.message || categoriesError?.message}</p>;

//   const handleCategoryChange = (event) => {
//     setSelectedCategory(event.target.value);
//   };

//   return (
//     <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 ">
//       <div className="flex items-center justify-between mb-12">
//         <h1 className="text-4xl font-extrabold text-[#16A34A] flex items-center">
//           <ChefHat className="mr-3 w-10 h-10" /> Recipe Catalog
//         </h1>
//         <select
//           value={selectedCategory}
//           onChange={handleCategoryChange}
//           className="border-2 border-[#16A34A] p-3 rounded-full text-[#16A34A] font-semibold focus:ring-2 focus:ring-[#86EFAC] focus:border-[#16A34A] transition-all"
//         >
//           <option value="">All Categories</option>
//           {categories.map((category) => (
//             <option key={category._id} value={category._id}>
//               {category.name}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {recipes.map((recipe) => (
//           <RecipeCard key={recipe._id} recipe={recipe} />
//         ))}
//       </div>
//       {recipes.length === 0 && (
//         <div className="text-center mt-16">
//           <Salad className="w-24 h-24 mx-auto text-[#16A34A] mb-6" />
//           <p className="text-xl text-gray-600 font-semibold">No recipes found in this category. Try selecting a different one!</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CatalogPage;

///////////////////////////////////////////////////////////
import { useState } from 'react';
import useRecipes from '../Hooks/useRecipes';
import useCategories from '../Hooks/useCategories';
import RecipeCard from '../Components/RecipeCard';
import { Salad, ChefHat, Loader2 } from 'lucide-react';

const CatalogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); // حالة نص البحث
  const { recipes, loading: recipesLoading, error: recipesError } = useRecipes(selectedCategory);
  const { categories, loading: categoriesLoading, error: categoriesError } = useCategories();

  if (recipesLoading || categoriesLoading) return (
    <div className="flex items-center justify-center h-screen">
      <Loader2 className="w-12 h-12 animate-spin text-[#16A34A]" />
    </div>
  );
  if (recipesError || categoriesError) return <p className="text-red-500 text-center mt-10 font-semibold">Error: {recipesError?.message || categoriesError?.message}</p>;

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase()); // تحديث نص البحث
  };

  // تصفية الوصفات بناءً على نص البحث
  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 ">
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-4xl font-extrabold text-[#16A34A] flex items-center">
          <ChefHat className="mr-3 w-10 h-10" /> Recipe Catalog
        </h1>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="border-2 border-[#16A34A] p-3 rounded-full text-[#16A34A] font-semibold focus:ring-2 focus:ring-[#86EFAC] focus:border-[#16A34A] transition-all"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border-2 border-[#16A34A] p-3 rounded-full text-[#16A34A] font-semibold focus:ring-2 focus:ring-[#86EFAC] focus:border-[#16A34A] transition-all w-full max-w-md"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </div>
      {filteredRecipes.length === 0 && (
        <div className="text-center mt-16">
          <Salad className="w-24 h-24 mx-auto text-[#16A34A] mb-6" />
          <p className="text-xl text-gray-600 font-semibold">No recipes found in this category. Try selecting a different one!</p>
        </div>
      )}
    </div>
  );
};

export default CatalogPage;









