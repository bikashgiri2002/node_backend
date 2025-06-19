import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const mongodbUri = process.env.MONGO_URI + `/${DB_NAME}`;
    const connection = await mongoose.connect(mongodbUri);
    console.log(`mongoDB collect at HOST :: ${connection}`);
  } catch (error) {
    console.log("Error in connect DB", error);
    process.exit(1);
  }
};

export default connectDB;
