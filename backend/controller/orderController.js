const Order = require("../model/order");

module.exports = {
  getOrder: async (req, res) => {
    const userId = req.params;

    try {
      const userOrder = await Order.find({ userId })
        .populate({
          path: "productId",
          select: "-description -productLocation",
        })
        .exec();

      res.status(200).json(userOrder);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
