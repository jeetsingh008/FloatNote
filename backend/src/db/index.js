import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}`
    );
    console.log(
      "MONGODB CONNECTED: HOST -> ",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log("DATABASE CONNECTION FAILED: ", error);
    process.exit(1);
  }
};
