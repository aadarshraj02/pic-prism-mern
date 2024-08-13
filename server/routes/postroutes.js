const router = require("express").Router();
const { verifyToken } = require("../middlewares/verifyToken");
const {
  createPost,
  getAllPosts,
  getMyPosts,
} = require("../controllers/postController");

router.post("/post/create", verifyToken, createPost);
router.get("/post/getAll", getAllPosts);
router.get("/post/myPosts", verifyToken, getMyPosts);
router.delete("/post/delete/:id");

module.exports = router;
