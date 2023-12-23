import { ZodError } from "zod";
import { resError } from "../utils/errorHandler.js";

export const schemaValidator = (schema) => (req, res, next) => {
  try {
    console.log("Cuerpo", req.body);
    if (req.file) {
      req.body.photo = req.file.filename;
    }
    const body = schema.parse(req.body);
    req.body = body;
    //Send Phote

    next();
  } catch (error) {
    console.log(error);
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
