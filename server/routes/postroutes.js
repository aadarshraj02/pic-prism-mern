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
  getPostsByRange,
} = require("../controllers/postController");

router.post("/post/create", verifyToken, createPost);
router.get("/post/getAll", getAllPosts);
router.get("/post/myPosts", verifyToken, getMyPosts);
router.delete("/post/delete/:id", verifyToken, deletePost);
router.get("/post/search", searchPost);
router.put("/post/addToFavorites/:postId", verifyToken, addToFavorites);
router.put(
  "/post/removeFromFavorites/:postId",
  verifyToken,
  removeFromFavorites
);
router.get("/post/favorites", verifyToken, getFavorites);
router.get("/post/getPostsByDateRange", verifyToken, getPostsByRange);

module.exports = router;
