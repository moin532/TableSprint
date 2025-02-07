import mongoose from "mongoose";

const MONGODB_URI =
  "mongodb+srv://moinmisba92:moin%402003@cluster0.mz4rxz1.mongodb.net/CLGMANAGMENT?retryWrites=true&w=majority&appName=Cluster0";
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
