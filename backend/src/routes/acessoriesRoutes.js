import { Router } from 'express';
import { create, findAcessorie, findAllAcessorie } from '../controllers/AcessoriesController.js';

const router = Router();

router.get('/acessories', findAllAcessorie);
router.post('/acessories/add', create);
router.get('/acessories/:id', findAcessorie);

export default router;
