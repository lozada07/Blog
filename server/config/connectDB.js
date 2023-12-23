import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {});
    console.log("Connected to Mongo");
  } catch (error) {
    console.log("Failed to connect to Mongo");
  }
};

export default connectDB;
