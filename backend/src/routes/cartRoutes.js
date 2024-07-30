import { Router } from 'express';
import { create, findItemCart, findAllItemsCart, deleteItemCart } from '../controllers/CartController.js';

const router = Router();

router.get('/cartItems', findAllItemsCart);
router.post('/cart/add', create);
router.get('/cart/:id', findItemCart);
router.delete('/cart/:id', deleteItemCart);

export default router;