const router = require("express").Router();
const { verifyToken } = require("../middlewares/verifyToken");
const {
  createPost,
  getAllPosts,
  getMyPosts,
  deletePost,
  searchPost,
  addToFavorites,
  removeFromFavorites,
  getFavorites,
} = require("../controllers/postController");

router.post("/post/create", verifyToken, createPost);
router.get("/post/getAll", getAllPosts);
router.get("/post/myPosts", verifyToken, getMyPosts);
router.delete("/post/delete/:id", verifyToken, deletePost);
router.get("/posts/search", searchPost);
router.put("/post/addToFavorites/:postId", verifyToken, addToFavorites);
router.put(
  "/post/removeFromFavorites/:postId",
  verifyToken,
  removeFromFavorites
);
router.get("/posts/favorites", verifyToken, getFavorites);

module.exports = router;
