const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

router.get('/test', productController.test);

module.exports = router;
