const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController');
const { validateBody } = require('../validators/orderValidator');

router.get('/', ordersController.getOrders);
router.post('/', validateBody, ordersController.createOrder);
router.get('/:id', ordersController.getOrderById);
router.put('/:id', validateBody, ordersController.updateOrder);
router.delete('/:id', ordersController.deleteOrder);

module.exports = router;
