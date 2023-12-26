import mongoose from "mongoose";
import Post from "../models/post.model.js";
import { errorHandler, resError } from "../utils/errorHandler.js";
import { response } from "../utils/response.js";

export const getAllPost = errorHandler(async (req, res) => {
  const { q } = req.query;

  const post = await Post.find({
    $or: [{ category: q }, { title: { $regex: new RegExp(q, "i") } }],
  })
    .populate({
      path: "author_id",
      select: "-password",
    })
    .sort({ _id: -1 });

  response(res, 200, post);
});
export const getAllPostUser = errorHandler(
  async (req, res) => {
    const posts = await Post.find({ author_id: req.user_id }).populate({
      path: "author_id",
      select: "-password",
    });

    response(res, 200, posts);
  },
  "Joder",
  404
);

export const getPost = errorHandler(
  async (req, res) => {
    const { id } = req.params;

    const post = await Post.findById(id)
      .populate({
        path: "author_id",
        select: "-password",
      })
      .populate({
        path: "comments",
        populate: {
          path: "author_id",
          select: "-password",
        },
      });
    if (!post) {
      resError(res, 404, "Post not found");
    }
    response(res, 200, post);
  },
  "Post not found",
  404
);

export const createPost = errorHandler(
  async (req, res) => {
    req.body.author_id = req.user_id;
    req.body.category = JSON.parse(req.body.category);
    const newPost = await Post.create(req.body);
    response(res, 200, newPost);
  },
  "Title already exists",
  400
);

export const updatePost = errorHandler(
  async (req, res) => {
    const { id } = req.params;
    req.body.category = JSON.parse(req.body.category);

    const updatePost = await Post.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    response(res, 200, updatePost);
  },
  "Post not found",
  404
);
export const deletePost = errorHandler(
  async (req, res) => {
    const { id } = req.params;

    const post = await Post.findByIdAndDelete(id);

    response(res, 200);
  },
  "Post not found",
  404
);
