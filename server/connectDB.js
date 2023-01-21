import mongoose from "mongoose";

export const PORT = process.env.PORT || 5000;

export const connectDB = async () => {
  mongoose.set("strictQuery", false);
  // mongoose.set("useFindAndModify", false);
  const conn = await mongoose.connect(process.env.MY_MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log(`Mongodb connected ${conn.connection.host}`);
};
