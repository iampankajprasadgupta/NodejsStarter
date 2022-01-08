import express from 'express';

const router = express.Router();

import { createProduct, getProducts } from '../Controllers/ProductController.js';

router.get('/', getProducts);
router.post('/', createProduct);

export default router;

