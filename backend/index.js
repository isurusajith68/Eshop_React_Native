const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const ProductRoute = require("./routes/product");
const AuthRouter = require("./routes/auth");
const UserRouter = require("./routes/user");
const CartRouter = require("./routes/cart");
const OrderRouter = require("./routes/order");
const app = express();
const port = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log(`DB CONNECT ${mongoose.connection.host}`))
  .catch((err) => console.log(err));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

app.use("/api/products", ProductRoute);
app.use("/api/auth", AuthRouter);
app.use("/api/user", UserRouter);
app.use("/api/cart", CartRouter);
app.use("/api/cart", OrderRouter);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
