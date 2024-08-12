const Post = require("../model/Post");
const User = require("../model/User");

const createPost = async (req, res) => {
  const authorId = req.id;
  const authorAccountType = req.accountType;

  if (authorAccountType == "buyer") {
    return res.status(403).json({
      success: false,
      message: "Forbidden,only sellers can post",
    });
  }
};
