const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: "userPetsPhoto",
  resource_type: "auto",
  allowedFormats: ["jpg", "png", "jpeg", "webp", "gif"],
  filename: (req, res, cb) => {
    console.log("uploadMiddleWare req.body", req.body);
    console.log("uploadMiddleWare req.query", req.query);
    cb(null, res.originalname);
  },
  transformation: [{ width: 500, height: 500, crop: "limit" }],
});

const uploadCloud = multer({ storage });

module.exports = uploadCloud;
