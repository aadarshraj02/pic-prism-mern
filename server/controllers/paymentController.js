const Razorpay = require("razorpay");
const User = require("../model/User");
const crypto = require("crypto");

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

const generateOrder = async (req, res) => {
  const purchaserId = req.id;
  const { price } = req.body;

  try {
    let user = await User.findById(purchaserId);
    if (!user)
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    const options = {
      amount: Number(price * 100),
      currency: "USD",
      receipt: crypto.randomBytes(10).toString("hex"),
    };
    razorpayInstance.orders.create(options, (error, order) => {
      if (error) {
        return res.status(500).json({
          success: false,
          message: error.message,
        });
      }
      return res.status(200).json({
        success: true,
        data: order,
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
