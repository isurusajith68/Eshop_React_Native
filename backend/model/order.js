const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    coustomerId: {
      type: String,
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    quantity: {
      type: Number,
      required: true,
    },
    subTotal: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    deliveryStatus: {
      type: String,
      default: "Pending",
    },
    paymentStatus: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Order", OrderSchema);
