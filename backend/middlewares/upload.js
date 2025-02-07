import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API,
  api_secret: process.env.CLOUDINARY_SECRET,
});

// Set up Cloudinary storage for Multer
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "chat-app-v2",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage });

export default upload;
