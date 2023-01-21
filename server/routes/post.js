import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/post.js";
import { verifyToken } from "../middleware/auth.js";

const postRouter = express.Router();

postRouter.get("/", verifyToken, getFeedPosts);
postRouter.get("/:userId/posts", verifyToken, getUserPosts);

postRouter.get("/:id/like", verifyToken, likePost);

export default postRouter;
