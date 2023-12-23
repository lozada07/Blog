import { z } from "zod";
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const authRegisterSchema = z
  .object({
    email: z.string({ required_error: "Email is required" }).email({
      message: "Email is invalid",
    }),
    username: z
      .string({ required_error: "Emauldad" })
      .min(1, "Username is required"),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters",
    }),
    confirmPassword: z.string().optional(),
  })
  .refine(
    (data) =>
      data.confirmPassword === undefined ||
      data.password === data.confirmPassword,
    {
      message: "Password does not match",
      path: ["confirmPassword"],
    }
  );

export const authLoginSchema = z.object({
  email: z.string({ required_error: "Email is required" }).email({
    message: "Email is invalid",
  }),

  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
  confirmPassword: z.string().optional(),
});

export const updateUserSchema = z
  .object({
    email: z.string({ required_error: "Email is required" }).email({
      message: "Email is invalid",
    }),
    username: z
      .string({ required_error: "Emauldad" })
      .min(1, "Username is required"),
    password: z
      .string()
      .min(6, {
        message: "Password must be at least 6 characters",
      })
      .optional(),
    newPassword: z
      .string()
      .min(6, {
        message: "Password must be at least 6 characters",
      })
      .optional(),
    confirmPassword: z.string().optional(),
    avatar: z.any().optional(),
  })
  .refine(
    (data) =>
      data.confirmPassword === undefined ||
      data.newPassword === data.confirmPassword,
    {
      message: "Password does not match",
      path: ["confirmPassword"],
    }
  );
