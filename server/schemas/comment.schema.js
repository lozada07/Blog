import { z } from "zod";

export const commentSchema = z.object({
  content: z.string({ invalid_type_error: "Comment is requite" }).trim().min(4),
});
