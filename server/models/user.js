import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  lastName: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  picturePath: {
    type: String,
    required: true,
    default: "",
    unique: true,
  },
  friends: {
    type: Array,
    default: [],
  },
  location: String,
  occupation: String,
  viewedProfileNo: Number,
  impression: Number,
},
{timestamps: true});
const UserModel = mongoose.model("UserModel", UserSchema);
export default UserModel;
