const sequelize = require('../configs/sequelize');
const { DataTypes } = require('sequelize');
const Admin = require('./Admin');
const Cart = require('./Cart');

const Product = sequelize.define('product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: DataTypes.INTEGER,
  stock: DataTypes.INTEGER,
  unit: DataTypes.INTEGER,
  unit: DataTypes.STRING,
  volume: DataTypes.INTEGER,
  stock_in_unit: DataTypes.INTEGER,
  image: DataTypes.TEXT,
  description: DataTypes.TEXT,
  appearence: DataTypes.STRING,
});

// Cart.belongsTo(Product);
// Product.hasMany(Cart);

module.exports = Product;
