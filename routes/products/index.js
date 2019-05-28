const productService = require('../../services/products.service');
const products = require('../../db/models/products.model');
const express = require('express');
const router = express.Router();
const logger = require('../../config/logger.config')();

router.use(function timeLog(req, res, next) {
    logger.info('Time: ', Date.now());
    next();
});

router.get('/', function(req, res) {
    logger.info('Get All Products called');
    productService.getAll(res);
});

router.get('/prodName/:name', function(req, res) {
    logger.info('Get Products By Name called');
    const name = req.params.name;
    console.log(name);

    productService.getByName(name, res);
});

logger.info('Rotas produtos OK');

module.exports = router;