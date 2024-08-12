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

  const { title, author, price, image, publicId } = req.body;

  try {
    const post = new Post({
      title,
      author,
      price,
      image,
      publicId,
      authorId,
    });
    await post.save();

    await User.findByIdAndUpdate(authorId, {
      $push: { uploads: post._id },
    });
    return res.status(201).json({
      success: true,
      message: "Post Created Successfully",
      post,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    if (posts.length === 0)
      return res.status(404).json({
        success: false,
        message: "No Post Found",
      });
    return res.status(200).json({
      success: true,
      data: posts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
