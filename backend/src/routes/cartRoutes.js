const express = require('express');
const { addItemToCart, getCartItems, updateCartItem, removeCartItem } = require('../controllers/CartController');
const router = express.Router();

router.post('/add', addItemToCart);
router.put('/update', updateCartItem);
router.delete('/:productId', removeCartItem);
router.get('/', getCartItems);

module.exports = router;
