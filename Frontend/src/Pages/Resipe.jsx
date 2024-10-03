
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import ReviewForm from '../Components/ReviewForm';
import ReviewsList from '../Components/ReviewsList';
import { FaClock, FaUsers, FaLeaf, FaShareAlt, FaChevronDown, FaChevronUp, FaUser ,   FaFlag,
} from 'react-icons/fa';
import { GiCookingPot, GiMeal } from 'react-icons/gi';

// دالة لاستخراج معرف فيديو YouTube
function getYouTubeID(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

const RecipeDetailsPage = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVideoSticky, setIsVideoSticky] = useState(false);
  const [showIngredients, setShowIngredients] = useState(true);
  const [showInstructions, setShowInstructions] = useState(true);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false); // New state for report modal
  const [reportReason, setReportReason] = useState(""); // New state for report reason
  

  useEffect(() => {
    if (recipeId) {
      const fetchRecipe = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3000/api/recipes/get/${recipeId}`
          );
          setRecipe(response.data);
          Swal.fire({
            icon: "success",
            title: "Recipe Loaded",
            text: "Enjoy exploring this delicious salad recipe!",
            timer: 1500,
            showConfirmButton: false,
          });
        } catch (err) {
          setError(err);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to load recipe details!",
          });
        } finally {
          setLoading(false);
        }
      };

      fetchRecipe();
    } else {
      setError(new Error("Recipe ID is missing"));
      setLoading(false);
    }
     
    const handleScroll = () => {
      setIsVideoSticky(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [recipeId]);

  const handleShare = async () => {
    const shareData = {
      title: recipe.title,
      text: recipe.description,
      url: window.location.href,
    };

    try {
      await navigator.share(shareData);
      Swal.fire({
        icon: "success",
        title: "Shared!",
        text: "Recipe shared successfully!",
        timer: 1500,
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Sharing failed",
        text: `Error sharing: ${err.message}`,
      });
    }
  };

  const openReportModal = () => {
    setIsReportModalOpen(true);
  };

  const closeReportModal = () => {
    setIsReportModalOpen(false);
    setReportReason("");
  };

  const submitReport = async () => {
    if (!reportReason.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Reason required",
        text: "Please provide a reason for reporting this recipe.",
      });
      return;
    }

    try {
      await axios.post(
        `http://localhost:3000/api/reports/${recipeId}`,
        {
          reportableType: "Recipe", // Sending reportableType as "Recipe"
          reason: reportReason,
        },
        { withCredentials: true } // Include cookies
      );
      Swal.fire({
        icon: "success",
        title: "Report Submitted",
        text: "Thank you for reporting this recipe. We'll review it shortly.",
      });
      closeReportModal();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed to submit report",
        text: "There was an error submitting your report. Please try again.",
      });
    }
  };

  const reportReply = async () => {
    if (!reportReason.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Reason required",
        text: "Please provide a reason for reporting this reply.",
      });
      return;
    }

    try {
      await axios.post(
        `http://localhost:3000/api/replies/report/${replyToReport}`,
        {
          reason: reportReason,
        },
        { withCredentials: true } // Include cookies
      );
      Swal.fire({
        icon: "success",
        title: "Report Submitted",
        text: "Thank you for reporting this reply. We'll review it shortly.",
      });
      closeReportModal();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed to submit report",
        text: "There was an error submitting your report. Please try again.",
      });
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Error: {error.message}
      </div>
    );
  if (!recipe)
    return (
      <div className="flex justify-center items-center h-screen">
        No recipe data available.
      </div>
    );

  const youtubeID = recipe.videoTutorialUrl
    ? getYouTubeID(recipe.videoTutorialUrl)
    : null;

  // return (
  //   <div className="bg-gray-100 min-h-screen">
  // <div className="max-w-5xl mx-auto px-4 py-8">
  //   <h1 className="text-5xl font-bold mb-4 text-[#16A34A]">
  //     {recipe.title}
  //   </h1>
  //   <p className="text-xl mb-8 text-gray-700">{recipe.description}</p>

  //   <div className="mb-12 relative">
  //     {youtubeID ? (
  //       <iframe
  //         className="w-full rounded-xl shadow-2xl"
  //         style={{ maxHeight: "70vh", aspectRatio: "16/9" }}
  //         src={`https://www.youtube.com/embed/${youtubeID}`}
  //         frameBorder="0"
  //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //         allowFullScreen
  //       ></iframe>
  //     ) : (
  //       <div className="bg-[#86EFAC] rounded-xl p-8 text-center">
  //         <p className="text-2xl text-[#16A34A]">
  //           No video available for this recipe.
  //         </p>
  //       </div>
  //         )}

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold mb-4 text-[#16A34A]">{recipe.title}</h1>
        <p className="text-xl mb-8 text-gray-700">{recipe.description}</p>

        <div className="mb-12 relative">
          {youtubeID ? (
            <iframe
              className="w-full rounded-xl shadow-2xl"
              style={{ maxHeight: '70vh', aspectRatio: '16/9' }}
              src={`https://www.youtube.com/embed/${youtubeID}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="bg-[#86EFAC] rounded-xl p-8 text-center">
              <p className="text-2xl text-[#16A34A]">No video available for this recipe.</p>
            </div>
          )}
        <div className="max-w-5xl mx-auto px-4 py-8 relative">
          {/* Report icon at the top-right corner */}
          <div className="absolute top-4 right-4">
            <button
              onClick={openReportModal}
              className="text-red-500 hover:text-red-700 transition-colors flex gap-2"
              title="Report this recipe"
            >
              Report
              <FaFlag className="text-3xl" />
            </button>
          </div>
          <h1 className="text-5xl font-bold mb-4 text-[#16A34A]">
            {recipe.title}
          </h1>
          <p className="text-xl mb-8 text-gray-700">{recipe.description}</p>

         

        </div>

        {/* Other content like video, ingredients, etc. */}

        {/* Report Modal */}
        {isReportModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-xl p-6 w-96">
              <h2 className="text-2xl font-bold mb-4 text-red-500">
                Report Recipe
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: FaClock,
              title: "Cooking Time",
              value: recipe.cookingTime
                ? `${recipe.cookingTime} minutes`
                : "Not available",
            },
            {
              icon: FaUsers,
              title: "Servings",
              value: recipe.servings || "Not available",
            },
            {
              icon: FaLeaf,
              title: "Nutrition",
              value: recipe.nutrition ? (
                <ul className="text-lg">
                  <li>Calories: {recipe.nutrition.calories || "N/A"}</li>
                  <li>Protein: {recipe.nutrition.protein || "N/A"}</li>
                  <li>Fats: {recipe.nutrition.totalFats || "N/A"}</li>
                  <li>Carbs: {recipe.nutrition.carbs || "N/A"}</li>
                </ul>
              ) : (
                "No nutrition information available."
              ),
            },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-[#16A34A]">
                <item.icon className="mr-2" /> {item.title}
              </h2>
              {typeof item.value === "string" ? (
                <p className="text-xl">{item.value}</p>
              ) : (
                item.value
              )}
            </div>
          ))}
        </div>

        {["Ingredients", "Instructions"].map((section, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 mb-12">
            <h2
              className="text-3xl font-semibold mb-4 cursor-pointer flex justify-between items-center text-[#16A34A]"
              onClick={() =>
                section === "Ingredients"
                  ? setShowIngredients(!showIngredients)
                  : setShowInstructions(!showInstructions)
              }
            >
              <span className="flex items-center">
                {section === "Ingredients" ? (
                  <GiCookingPot className="mr-2" />
                ) : (
                  <GiMeal className="mr-2" />
                )}{" "}
                {section}
              </span>
              {(
                section === "Ingredients" ? showIngredients : showInstructions
              ) ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}
            </h2>
            {(section === "Ingredients" ? showIngredients : showInstructions) &&
              (section === "Ingredients" ? (
                recipe.ingredients && recipe.ingredients.length > 0 ? (
                  <ul className="list-disc pl-6">
                    {recipe.ingredients.map((ingredient, idx) => (
                      <li
                        key={idx}
                        className="text-xl mb-2 transform transition-all hover:scale-105"
                      >
                        {`${ingredient.quantity} ${ingredient.unit} of ${ingredient.name}`}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xl">No ingredients available.</p>
                )
              ) : recipe.instructions && recipe.instructions.length > 0 ? (
                <ol className="list-decimal pl-6">
                  {recipe.instructions.map((instruction, idx) => (
                    <li
                      key={idx}
                      className="mb-6 transform transition-all hover:scale-105"
                    >
                      <p className="text-xl mb-2">{instruction.stepText}</p>
                      {instruction.stepImage && (
                        <img
                          src={instruction.stepImage}
                          alt={`Step ${idx + 1}`}
                          className="rounded-lg shadow-md mt-2"
                          style={{ maxWidth: "100%", height: "auto" }}
                        />
                      )}
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="text-xl">No instructions available.</p>
              ))}
          </div>
        ))}

        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-[#16A34A]">
            Final Dish
          </h2>
          {recipe.photos && recipe.photos.length > 0 && (
            <div className="flex justify-center">
              <img
                src={recipe.photos[0]}
                alt="Final Dish"
                className="rounded-xl shadow-2xl transition-transform transform hover:scale-105"
                style={{ maxWidth: "50%", height: "auto" }}
              />
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-[#16A34A]">
            Add Your Review
          </h2>
          <ReviewForm recipeId={recipeId} />
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-[#16A34A]">
            Reviews
          </h2>
          <ReviewsList
            recipeId={recipeId}
            renderReply={(reply) => (
              <div className="bg-gray-100 p-3 rounded-md mt-2">
                <div className="flex items-center mb-2">
                  <FaUser className="text-[#16A34A] mr-2" />
                  <span className="font-semibold text-[#16A34A]">
                    {reply.author.name}
                  </span>
                </div>
                <p>{reply.content}</p>
              </div>
            )}
          />
        </div>

        <div className="fixed bottom-4 left-4">
          <button
            onClick={handleShare}
            className="bg-[#16A34A] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#86EFAC] hover:text-[#16A34A] transition-colors flex items-center"
          >
            <FaShareAlt className="mr-2" /> Share Recipe
          </button>
        </div>

        {isVideoSticky && youtubeID && (
          <div className="fixed bottom-4 right-4 w-80 shadow-lg rounded-lg overflow-hidden">
            <iframe
              className="w-full h-auto"
              style={{ aspectRatio: '16/9' }}

              src={`https://www.youtube.com/embed/${youtubeID}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default RecipeDetailsPage;
