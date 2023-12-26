import Comment from "../models/comment.model.js";
import Post from "../models/post.model.js";
import User from "../models/user.model.js";

import { errorHandler, resError } from "../utils/errorHandler.js";
import { response } from "../utils/response.js";

export const createComment = errorHandler(
  async (req, res) => {
    const { idPost } = req.params;
    const post = await Post.findById(idPost);
    const user = await User.findById(req.user_id);

    if (!post && !user) {
      return resError(res, 400, "author_id or post_id are invalid");
    }
    const newComment = await Comment.create({
      post_id: idPost,
      author_id: req.user_id,
      content: req.body.content,
    });
    post.comments.push(newComment._id);
    await post.save();

    response(res, 200, newComment);
  },
  "Comment exist ",
  400
);

export const updateComment = errorHandler(
  async (req, res) => {
    const { id } = req.params;

    const comment = await Comment.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    response(res, 200, comment);
  },
  "Comment not found",
  404
);

export const deleteComment = errorHandler(
  async (req, res) => {
    const { id } = req.params;
    await Comment.findByIdAndDelete(id);

    response(res, 200);
  },
  "comment not found",
  404
);
