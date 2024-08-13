const Post = require("../model/Post");
const User = require("../model/User");

const createPost = async (req, res) => {
  const authorId = req.id;
  const authorAccountType = req.accountType;

  if (authorAccountType == "buyer") {
    return res
      .status(403)
      .json({ success: false, message: "Forbidden, only sellers can post" });
  }

  const { title, author, price, image, publicId } = req.body;

  try {
    const post = new Post({ title, author, price, image, publicId, authorId });
    await post.save();

    await User.findByIdAndUpdate(authorId, {
      $push: { uploads: post._id },
    });

    return res
      .status(201)
      .json({ success: true, message: "Post created successfully", post });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    if (posts.length === 0)
      return res
        .status(404)
        .json({ success: false, message: "No posts found" });

    return res.status(200).json({ success: true, data: posts });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const getMyPosts = async (req, res) => {
  const authorId = req.id;
  const authorAccountType = req.accountType;
  try {
    if (authorAccountType === "buyer") {
      const { purchased } = await User.findById(authorId).populate("purchased");
      console.log(purchased);
      if (!purchased)
        return res
          .status(404)
          .json({ success: false, message: "No posts found" });

      return res.status(200).json({ success: true, data: purchased });
    } else {
      const { uploads } = await User.findById(authorId).populate("uploads");
      if (!uploads)
        return res
          .status(404)
          .json({ success: false, message: "No posts found" });
      return res.status(200).json({ success: true, data: uploads });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  d;

  try {
    const post = await Post.findById(id);
    if (!post)
      return res.status(404).json({
        success: false,
        message: "Post not Found",
      });

    const { authorId } = post;
    await User.findByIdAndUpdate(authorId, {
      $pull: {
        uploads: id,
      },
    });
    // await Post.findByIdAndDelete(id)
    return res.status(200).json({
      success: true,
      message: "Post deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const searchPost = async (req, res) => {
  const { search } = req.query;
  try {
    const posts = await Post.find({
      title: { $regex: search, $options: "i" },
    });
    if (posts.length == 0)
      return res.status(404).json({
        success: false,
        message: "No Post found",
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

module.exports = {
  createPost,
  getAllPosts,
  getMyPosts,
  deletePost,
  searchPost,
};
