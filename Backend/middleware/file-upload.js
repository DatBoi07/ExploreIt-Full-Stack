const multer = require("multer");
const { v1: uuidv1 } = require("uuid");

MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};
const fileUpload = multer({
  liits: 500000,
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/images");
    },
    filename: (req, file, cb) => {
      const ext = MIME_TYPE_MAP[file.mimetype];
      cb(null, uuidv1() + "." + ext);
    },
  }),
  fileFilter: (req, file, cb) => {
    const isValid = !!MIME_TYPE_MAP[file.mimetype]; // !! converts undefined or null to false and any other value retrieved jpg png jpeg as true
    const error = isValid ? null : new Error("Invalid mime type!");
    cb(error, isValid);
  },
});
module.exports = fileUpload;
