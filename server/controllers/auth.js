import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../models/user.js";

// register user
export const register = async (req, res) => {
  const user = req.body.user;
  try {
    // check if user exist
    const userExist = UserModel.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ message: "user already exist" });
    }

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(body.password, salt);

    const newUser = await UserModel.create(...user, {
      password: passwordHash,
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000),
    });

    const token = jwt.sign(
      { email: newUser.email, id: newUser._id, picture: newUser.picturePath },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.status(201).json(newUser, token);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// login user
export const login = async (req, res) => {
  const { password, email } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) return res.status(400).json({ message: "incorrect email" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "incorrect password" });

    const token = jwt.sign(
      { email: newUser.email, id: newUser._id, picture: newUser.picturePath },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    delete user.password;
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
