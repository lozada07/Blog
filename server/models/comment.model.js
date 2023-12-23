import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    author_id: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    post_id: { type: mongoose.Types.ObjectId, ref: "Post", required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Comment", CommentSchema);
