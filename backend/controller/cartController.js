const product = require("../model/product");
const Product = require("../model/product");

module.exports = {
  addCart: async (req, res) => {
    const { userId, cartItem, quantity } = req.body;
    try {
      const cart = await Product.findOne({ userId });

      if (cart) {
        const existingProduct = cart.cart.find(
          (product) => product.cartItem.toString() === cartItem
        );
        if (existingProduct) {
          existingProduct.quantity += quantity;
        } else {
          cart.products.push({ cartItem, quantity });
        }
        await cart.save();
        res.status(201).json("Product added to cart");
      } else {
        const newCart = new Product({
          userId,
          products: [{ cartItem, quantity }],
        });
        await newCart.save();
        res.status(201).json("Product added to cart");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getCart: async (req, res) => {
    const { userId } = req.params;

    try {
      const cart = await Product.findOne({ userId }).populate(
        "products.cartItem"
      );
      res.status(200).json(cart.products);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteCartItem: async (req, res) => {},
  decrementCartItem: async (req, res) => {},
};
