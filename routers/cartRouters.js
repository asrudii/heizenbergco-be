const routers = require('express').Router();
const { cartControllers } = require('../controllers');
const { auth } = require('../configs/jwtadmin');

routers.get('/', cartControllers.getCart);
routers.get('/add', cartControllers.addCart);
routers.get('/addprod', cartControllers.addProduct);

module.exports = routers;
