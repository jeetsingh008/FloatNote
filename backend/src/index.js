import dotenv from "dotenv";
import { connectDB } from "../db/index.js";
import express from "express";

dotenv.config();

const app = express();
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => console.log("MongoDB connection failed: ", err));
