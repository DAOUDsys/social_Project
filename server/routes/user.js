import express from "express";
import { verifyToken } from "../middleware/auth.js";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/user.js";

const userRouter = express.Router();

userRouter.get("/:id", verifyToken, getUser);
userRouter.get("/:id/friends", verifyToken, getUserFriends);

userRouter.put("/:id/:friendId", verifyToken, addRemoveFriend);

export default userRouter;
