import z from "zod";

export const userSchema = z.object({
  firstName: z
    .string({
      error: (issue) => {
        if (issue.input === undefined) {
          return "field is required";
        }
      },
    })
    .trim()
    .min(3, "Enter at least 3 symbols")
    .max(20, "Value of this field is too long"),
  lastName: z
    .string({
      error: (issue) => {
        if (issue.input === undefined) {
          return "field is required";
        }
      },
    })
    .trim()
    .min(3, "Enter at least 3 symbols")
    .max(20, "Value of this field is too long"),
  age: z
    .number({
      error: "Enter a number",
    })
    .min(1, "Your age is too small")
    .max(130, "Your age is too big, be realistic"),
  email: z.email({
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  }),
  role: z.enum(["user", "admin"])
});
