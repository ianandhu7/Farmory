const express = require('express');
const router = express.Router();
const {
    createOrder,
    getOrderById,
    getMyOrders,
    getAllOrders,
    updateOrderStatus,
} = require('../controllers/order.controller');
const { protect, admin } = require('../middlewares/auth.middleware');

router.route('/').post(protect, createOrder).get(protect, admin, getAllOrders);

router.get('/myorders', protect, getMyOrders);

router.route('/:id').get(protect, getOrderById);

router.put('/:id/status', protect, admin, updateOrderStatus);

module.exports = router;
