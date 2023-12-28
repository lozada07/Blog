import multer from "multer";
import { CustomError } from "../utils/errorHandler.js";
import { schemaValidator } from "../middleware/schemaValidator.js";

const MIMETYPE = ["image/png", "image/jpg", "image/jpeg"];

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
     console.log("Entre", file.fieldname)
    cb(null, file.fieldname === "photo" ? "uploads" : "uploads/photoUsers");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

export const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    MIMETYPE.includes(file.mimetype)
      ? cb(null, true)
      : cb(new CustomError("Invalid file type", 400), false);
  },
  limits: {
    fieldSize: 1 * 1024,
  },
});
