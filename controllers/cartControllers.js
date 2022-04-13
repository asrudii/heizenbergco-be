const Cart = require('../models/Cart');
const Product = require('../models/Product');
const Admin = require('../models/Admin');

module.exports = {
  addProduct: async (req, res) => {
    try {
      await Product.sync();
      const response = await Product.create({
        name: 'Natural Ve Different Specifications Pharmaceutical Raw Material Mixed Tocopherol 50%, 70%, 90%',
        price: 2000,
        stock: 100,
        unit: 'ml',
        volume: 1000,
        stock_in_unit: 100000,
        image:
          '//image.made-in-china.com/155f0j00dMPifeUgHmza/Maintain-Anesthesia-Propofol-Injection-Emulsion-50ml-1g-2-.webp',
        description: 'Specialist Drugs, Anesthetic and Adjuvants',
        appearence: 'Injection',
      });

      res.send(response);
    } catch (error) {
      console.log(error);
    }
  },
  addCart: async (req, res) => {
    try {
      const idProduct = 1;
      const qty = 50;

      const checkCart = await Cart.findOne({
        where: {
          productId: idProduct,
        },
      });

      if (checkCart) {
        await Cart.update(
          {
            quantity: qty,
          },
          {
            where: {
              id: checkCart.id,
            },
          }
        );

        const response = await Cart.findAll({
          include: [{ model: Product }, { model: Admin }],
        });

        return res.status(201).send(response);
      }
      const response = await Cart.create({
        quantity: 80,
        adminId: 1,
        productId: 2,
      });
      res.send(response);
    } catch (error) {
      console.log(error);
    }
  },
  getCart: async (req, res) => {
    try {
      //   let page = req.query.page ? req.query.page : 1;
      //   let render = 5;
      //   let start = (page - 1) * render;
      //   let end = start + render;
      //   console.log(start, end);
      //   const count = await Cart.count();
      const response = await Admin.findAll({
        include: [{ model: Product }, { model: Cart }],
      });
      // offset: start,
      // limit: end,
      // include: [{ model: Product }, { model: Admin }],

      // total_data: count,
      // total_page: Math.ceil(count / render),
      // active_page: page,
      res.send(response);
    } catch (error) {
      console.log(error);
    }
  },
};
