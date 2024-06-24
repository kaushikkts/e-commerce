import express from 'express';
const router = express.Router();

import * as productsController from '../controllers/products.controller';


router.get('/', productsController.get);

module.exports = router;