import PostModel from "../models/post.js";
import UserModel from "../models/user.js";

export const createPost = async (req, res) => {
  const { userId, description, picturePath } = req.body;
  try {
    const user = await UserModel.findById(userId);
    const newPost = await PostModel.create({
      userId,
      description,
      picturePath,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      firstName: user.firstName,
      userPicturePath: user.picturePath,
      likes: {},
      comments: [],
    });
    await newPost.save();

    const post = await PostModel.find();

    res.status(201).json(post);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};
export const getFeedPosts = async (req, res) => {
  try {
    const post = await PostModel.find();

    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
export const getUserPosts = async (req, res) => {
  const userId = req.params.userId;
  try {
    const posts = await PostModel.find({ userId });

    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
export const likePost = async (req, res) => {
  const id = req.params.id;
  const userId = req.id;
  try {
    const post = await PostModel.findById(id);
    const isLiked = post.likes.get(userId);
    if (!isLiked) post.likes.set(userId, true);
    else post.likes.delete(userId);

    const updatedPost = await PostModel.findByIdAndUpdate(
      id,
      {
        likes: post.likes,
      },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
