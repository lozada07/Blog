import { z } from "zod";
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const postSchema = z.object({
  title: z
    .string()
    .min(1, {
      message: "Title is requeried",
    })
    .trim(),
  content: z.string().trim().min(20, {
    message: "Contents is requeried",
  }),
  category: z
    .string({
      invalid_type_error: "Category is required",
    })
    .min(1, "Category is required"),

  photo: z
    .any()
    .refine((files) => files?.length == 1, "Image is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg ,.png  files are accepted."
    )
    .or(z.string()),
});
