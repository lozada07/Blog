import express from "express";

import isAuthenticate from "../../middleware/IsAuthenticate.js";
import { updateUser } from "../../controllers/user.controller.js";
import { schemaValidator } from "../../middleware/schemaValidator.js";
import { authEditSchema } from "../../schemas/auth.schema.js";
import { upload } from "../../config/multer.js";

const router = express.Router();

router.put(
  "/",
  isAuthenticate,
  upload.single("avatar"),
  schemaValidator(authEditSchema),
  updateUser
);

export default router;
