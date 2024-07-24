import { Router } from 'express';
import { create, findClothing, findAllClothing } from '../controllers/ClothingController.js';

const router = Router();

router.get('/vestuario', findAllClothing);
router.post('/vestuario/add', create);
router.get('/vestuario/:id', findClothing);

export default router;
