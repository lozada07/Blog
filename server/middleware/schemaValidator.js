import { ZodError } from "zod";
import { resError } from "../utils/errorHandler.js";
import { cloudinaryUpload } from "../utils/Cloudinary.js";

export const schemaValidator = (schema) => (req, res, next) => {
  try {
    if (req.file) {
      cloudinaryUpload(req.file.path, req.file.destination).then((data) => {
        req.body.photo = {
          public_id: data.public_id,
          secure_url: data.secure_url,
        };
        console.log("COMENZE ACÁ");
        const body = schema.parse(req.body);
        req.body = body;
        console.log("LLEGUE ACÁ");
        next();
      });
    } else {
      const body = schema.parse(req.body);
      req.body = body;
      next();
    }
  } catch (error) {
    if (error instanceof ZodError) {
      resError(
        res,
        400,
        error.issues.map((issues) => ` ${issues.message}`)
      );
    }
    return res.status(500).json({ message: "Internal server error" });
  }
};
