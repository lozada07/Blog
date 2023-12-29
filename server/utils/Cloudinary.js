import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME_CLOUDINARY,
  api_key: process.env.API_KEY_CLOUDINARY,
  api_secret: process.env.API_SECRET_CLOUDINARY,
  secure: process.env.SECURE_CLOUDINARY,
});

export const cloudinaryUpload = async (filePath, destination) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: destination === "uploads" ? "uploads" : "uploads/photoUsers",
  });
};
export const cloudinaryDelete = async (public_id) => {
  return await cloudinary.uploader.destroy(public_id);
};
