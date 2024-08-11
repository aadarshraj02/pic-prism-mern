const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];

  if (!token)
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  try {
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
