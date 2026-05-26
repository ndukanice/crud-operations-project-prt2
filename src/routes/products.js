const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const { validateBody } = require('../validators/productValidator');

router.get('/', productsController.getProducts);
router.post('/', validateBody, productsController.createProduct);
router.get('/:id', productsController.getProductById);
router.put('/:id', validateBody, productsController.updateProduct);
router.delete('/:id', productsController.deleteProduct);

module.exports = router;
