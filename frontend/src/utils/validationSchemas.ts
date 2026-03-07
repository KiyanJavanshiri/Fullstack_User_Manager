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
          return "Field is required";
        }
      },
    })
    .trim()
    .min(3, "Enter at least 3 symbols")
    .max(20, "Value of this field is too long"),
  age: z
    .string({
      error: (issue) => {
      if(issue.input === undefined) {
        return "Field is required"
      }
    },
    })
    .regex(/^(?:1[01][0-9]|120|[1-9]?[0-9])$/, "Age must be between 0 and 120")
    .transform((val) => Number(val)),
  email: z.email({
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    error: (issue) => {
      return issue.input === undefined
        ? "Field is required"
        : "Invalid email format";
    },
  }),
  role: z.enum(["user", "admin"], {
    error: "Role should be or 'user' or 'admin'",
  }),
});
