import mongoose from "mongoose";
import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";

export const registerUser = asyncHandler(async (req, res) => {
  // Get user details from request body
  const { username, fullname, email, password } = req.body;
  // Validate for empty fields
  if (!username || !password) {
    throw new ApiError(400, "Username and password are required");
  }
  // validate username or email (Find and check if the user already exists)
  const user = await User.find({ $or: [{ username }, { email }] });
  if (user) {
    throw new ApiError(400, "User already exists");
  }
  // Get avatar and thumbnail local path(if exists)
  const avatarLocalPath = req.file?.avatar?.[0]?.path;
  const thumbnailLocalPath = req.file?.thumbnail?.[0]?.path;

  if (!avatarLocalPath || !thumbnailLocalPath) {
    throw new ApiError(400, "Avatar and thumbnail are required");
  }
  // Upload on cloudinary
  const uploadedAvatar = await uploadOnCloudinary(avatarLocalPath);
  const uploadedThumbnail = await uploadOnCloudinary(thumbnailLocalPath);

  // Validate upload success
  if (!uploadedAvatar || !uploadedThumbnail) {
    throw new ApiError(500, "Avatar and thumbnail upload failed !! Try again");
  }
  // Save user to database
  const newUser = await User.create({
    username,
    fullname,
    email,
    avatar,
    thumbnail,
    password,
  });
  // send response to user
  res.status(200).json(200, newUser, "User created successfully");
});
