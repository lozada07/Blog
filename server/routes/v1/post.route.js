import express from "express";
import {
  createPost,
  deletePost,
  getAllPost,
  getPost,
  updatePost,
  getAllPostUser,
} from "../../controllers/post.controller.js";
import { postSchema, updatePostSchema } from "../../schemas/post.schema.js";
import { schemaValidator } from "../../middleware/schemaValidator.js";
import { upload } from "../../config/multer.js";
import isOwner from "../../middleware/isOwner.js";
import Post from "../../models/post.model.js";
import isAuthenticate from "../../middleware/IsAuthenticate.js";

const router = express.Router();

router.get("/", getAllPost);
router.get("/user", isAuthenticate, getAllPostUser);
router.get("/:id", getPost);

// Routes Protected
//Middleware
router.use(isAuthenticate);

router.post(
  "/",
  upload.single("photo"),
  schemaValidator(postSchema),
  createPost
);
router.put(
  "/:id",
  upload.single("photo"),
  isOwner(Post),
  schemaValidator(updatePostSchema),
  updatePost
);
router.delete("/:id", isOwner(Post), deletePost);

export default router;
