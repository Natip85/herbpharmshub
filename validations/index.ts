import * as z from "zod";
export const RegisterUserSchema = z
  .object({
    email: z.optional(z.string().email()),
    password: z.optional(
      z
        .string()
        .min(6, { message: "Password must be at least 6 characters long" })
    ),
    confirmPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.confirmPassword) {
        return false;
      }

      return true;
    },
    { message: "Please confrim your password", path: ["confirmPassword"] }
  )
  .refine(
    (data) => {
      if (data.confirmPassword && !data.password) {
        return false;
      }

      return true;
    },
    { message: "Password is required", path: ["password"] }
  )
  .refine(
    (data) => {
      if (data.confirmPassword !== data.password) {
        return false;
      }

      return true;
    },
    { message: "Passwords do not match", path: ["password"] }
  );

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});
