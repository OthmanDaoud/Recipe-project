// const User = require('../Models/userModel');
// const Recipe = require('../Models/recipeModel');

// // أضف وصفة إلى قائمة المفضلات
// exports.addFavorite = async (req, res) => {
//   try {
//     const { userId, recipeId } = req.body;
//     // تحقق من وجود الوصفة والمستخدم
//     const user = await User.findById(userId);
//     const recipe = await Recipe.findById(recipeId);
//     if (!user || !recipe) {
//       return res.status(404).json({ message: 'User or Recipe not found' });
//     }
//     // تحقق من أن الوصفة ليست بالفعل في قائمة المفضلات
//     if (!user.savedRecipes.includes(recipeId)) {
//       user.savedRecipes.push(recipeId);
//       await user.save();
//     }
//     res.status(200).json({ message: 'Recipe added to favorites' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // إزالة وصفة من قائمة المفضلات
// exports.removeFavorite = async (req, res) => {
//   try {
//     const { userId, recipeId } = req.body;
//     // تحقق من وجود المستخدم والوصفة
//     const user = await User.findById(userId);
//     if (!user || !user.savedRecipes.includes(recipeId)) {
//       return res.status(404).json({ message: 'User or Recipe not found' });
//     }
//     // إزالة الوصفة من قائمة المفضلات
//     user.savedRecipes = user.savedRecipes.filter(id => id.toString() !== recipeId);
//     await user.save();
//     res.status(200).json({ message: 'Recipe removed from favorites' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
const User = require('../Models/userModel');
const Recipe = require('../Models/recipeModel');

// أضف وصفة إلى قائمة المفضلات
exports.addFavorite = async (req, res) => {
  try {
    // تحقق من وجود user_id في الكوكيز
    const userId = req.cookies.user_id;
    console.log(userId);
    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    const { recipeId } = req.body;

    // تحقق من وجود الوصفة والمستخدم
    const user = await User.findById(userId);
    const recipe = await Recipe.findById(recipeId);
    if (!user || !recipe) {
      return res.status(404).json({ message: 'User or Recipe not found' });
    }
    // تحقق من أن الوصفة ليست بالفعل في قائمة المفضلات
    if (!user.savedRecipes.includes(recipeId)) {
      user.savedRecipes.push(recipeId);
      await user.save();
    }
    res.status(200).json({ message: 'Recipe added to favorites' });
  } catch (error) {
    console.error('Error in addFavorite:', error); // طباعة تفاصيل الخطأ في الخادم
    res.status(500).json({ message: error.message });
  }
};

// إزالة وصفة من قائمة المفضلات
exports.removeFavorite = async (req, res) => {
  try {

    const userId = req.cookies.user_id;
    // const userId = req.user;
    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    const { recipeId } = req.body;


    const user = await User.findById(userId);
    if (!user || !user.savedRecipes.includes(recipeId)) {
      return res.status(404).json({ message: 'User or Recipe not found' });
    }
    // إزالة الوصفة من قائمة المفضلات
    user.savedRecipes = user.savedRecipes.filter(id => id.toString() !== recipeId);
    await user.save();
    res.status(200).json({ message: 'Recipe removed from favorites' });
  } catch (error) {
    console.error('Error in removeFavorite:', error); // طباعة تفاصيل الخطأ في الخادم
    res.status(500).json({ message: error.message });
  }
};
