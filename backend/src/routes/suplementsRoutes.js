import { Router } from 'express';
import { create, findSuplement, findAllSuplement } from '../controllers/SuplementsController.js';

const router = Router();

router.get('/suplements', findAllSuplement);
router.post('/suplements/add', create);
router.get('/suplements/:id', findSuplement);

export default router;
