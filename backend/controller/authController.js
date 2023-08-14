const User = require("../model/user");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

module.exports = {
  createUser: async (req, res) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      location: req.body.location,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString(),
    });
    try {
      await newUser.save();
      res.status(201).json({
        message: "User created successfully",
      });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  loginUser: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      !user && res.status(401).json("Wrong password or username");

      const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
      const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);

      decryptedPassword !== req.body.password &&
        res.status(401).json("Wrong password or username");

      const accessToken = jwt.sign(
        {
          id: user._id,
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "5d" }
      );

      const { password, ...info } = user._doc;
      res.status(200).json({ ...info, accessToken });
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
