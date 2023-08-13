const Product = require("../model/product");

module.exports = {
  createProduct: async (req, res) => {
    const newProduct = new Product(req.body);

    try {
      const savedProduct = await newProduct.save();
      res.status(200).json({
        message: "Product created successfully",
        data: savedProduct,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getAllProducts: async (req, res) => {
    console.log("send");
    try {
      const products = await Product.find().sort({ createAt: -1 });
      res.status(200).json({
        data: products,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getOneProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  searchProduct: async (req, res) => {
    try {
      const result = await Product.aggregate([
        {
          $search: {
            index: "funrnitureapp",
            text: {
              query: req.params.key,
              path: {
                wildcard: "*",
              },
            },
          },
        },
      ]);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
