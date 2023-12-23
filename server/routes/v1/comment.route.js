import express from "express";
import { schemaValidator } from "../../middleware/schemaValidator.js";
import isAuthenticate from "../../middleware/IsAuthenticate.js";
import {
  commentSchema,
} from "../../schemas/comment.schema.js";
import {
  createComment,
  deleteComment,
  updateComment,
} from "../../controllers/comment.controller.js";
import Comment from "../../models/comment.model.js";
import isOwner from "../../middleware/isOwner.js";

const router = express.Router();

//Middleware
router.use(isAuthenticate);

router.post("/:idPost", schemaValidator(commentSchema), createComment);
router.put(
  "/:id",
  isOwner(Comment),
  schemaValidator(commentSchema),
  updateComment
);
router.delete("/:id", isOwner(Comment), deleteComment);

export default router;
