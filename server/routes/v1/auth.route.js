import express from "express";
import {
  register,
  login,
  verifiyToken,
} from "../../controllers/auth.controller.js";
import { schemaValidator } from "../../middleware/schemaValidator.js";
import { authSchema } from "../../schemas/auth.schema.js";
import isAuthenticate from "../../middleware/IsAuthenticate.js";

const router = express.Router();

router.post("/register", schemaValidator(authSchema), register);
router.post("/login", schemaValidator(authSchema), login);
router.get("/verifyToken", isAuthenticate, verifiyToken);

export default router;
