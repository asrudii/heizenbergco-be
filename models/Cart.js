const sequelize = require('../configs/sequelize');
const { DataTypes } = require('sequelize');
const Product = require('./Product');
const Admin = require('./Admin');

const Cart = sequelize.define('cart', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Cart.belongsTo(Product);
Cart.belongsTo(Admin);
Product.hasMany(Cart);
Admin.hasMany(Cart);

module.exports = Cart;
