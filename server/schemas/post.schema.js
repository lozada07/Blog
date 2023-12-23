import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const postSchema = z.object({
  title: z
    .string()
    .min(1, {
      message: "Title is required",
    })
    .trim(),
  content: z.string().trim().min(20, {
    message: "Content is required",
  }),
  category: z.string().refine((categories) => {
    try {
      JSON.parse(categories);
      return true;
    } catch {
      return false;
    }
  }, "Categories must be an array"),

  photo: z
    .string({ required_error: "Phote is required" })
    .min(1, "Phote is required"),
});

export const updatePostSchema = z.object({
  title: z.string().trim().min(2, "Title is required").optional(),
  content: z.string().trim().min(2, "Description is required").optional(),
  photo: z
    .string({ required_error: "Phote is required" })
    .min(1, "Phote is required"),
  category: z.string().refine((categories) => {
    try {
      JSON.parse(categories);
      return true;
    } catch {
      return false;
    }
  }, "Categories must be an array"),
  author_id: z.string().trim().min(2, "author_id is required").optional(),
});
