import { z } from "zod";

export const authSchema = z.object({
  email: z.string().email("Email is required"),
  username: z.string().min(1, "Username is required").optional(),
  password: z.string().trim().min(4, "the password must be 4 characters long"),
  photo: z.string().optional(),
});

export const authEditSchema = z.object({
  email: z.string().email("Email is required").optional(),
  username: z.string().min(1, "Username is required").optional(),
  password: z
    .string()
    .trim()
    .min(6, "the password must be 6 characters long")
    .optional(),
  newPassword: z
    .string()
    .trim()
    .min(6, "the password must be 6 characters long")
    .optional(),
  photo: z.string().optional(),
});
