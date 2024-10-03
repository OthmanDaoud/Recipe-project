const express = require('express');
const router = express.Router();
const favoritesController = require('../Controllers/favoritesController');
const auth = require("./../Middleware/auth");
// أضف وصفة إلى قائمة المفضلات
router.post('/add', auth,favoritesController.addFavorite); 

// إزالة وصفة من قائمة المفضلات
router.post('/remove', auth,favoritesController.removeFavorite);

module.exports = router;
