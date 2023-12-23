import mongoose from "mongoose";

const PostModel = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    category: [{ type: String, required: true }],
    author_id: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    photo: { type: String, required: true },
    comments: {
      type: [{ type: mongoose.Types.ObjectId, ref: "Comment" }],
    },
  },
  { timestamps: true }
);

PostModel.pre(
  "deleteOne",
  { document: true, query: false },
  async function (next) {
    try {
      await this.model("Comment").deleteMany({ post_id: this._id });
      next();
    } catch (err) {
      next(err);
    }
  }
);

export default mongoose.model("Post", PostModel);
