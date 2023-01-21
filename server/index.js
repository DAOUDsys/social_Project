import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
import cors from "cors";
import multer from "multer";
import morgan from "morgan";
import path from "path";
import dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";
import postRouter from "./routes/post.js";
import { register } from "./controllers/auth.js";
import { createPost } from "./controllers/post.js";
import { fileURLToPath } from "url";
import { connectDB, PORT } from "./connectDB.js";
import { verifyToken } from "./middleware/auth.js";
import {users, posts} from "./data/indx.js"
import UserModel from "./models/user.js";
import PostModel from "./models/post.js";

// Configurations
const __filename = fileURLToPath(import.meta.url);
const __direname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__direname, "public/assets")));

// file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

// routes with files
app.post("/auth/register", upload.single("picture"), register);
app.post("/posts", verifyToken, upload.single("picture"), createPost);

// routes
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/posts", postRouter);

// connect mongo database
connectDB();

const server = app.listen(PORT, console.log(`server running on port ${PORT}`));

// add data
// UserModel.insertMany(users);
// PostModel.insertMany(posts);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error ${err.message}`);
  // close server & exit process
  server.close(() => process.exit(1));
});
