import mongoose from "mongoose";

export const validationError = (
  error: unknown,
): Record<string, string> | null => {
  if (error instanceof mongoose.Error.ValidationError) {
    const errors: Record<string, string> = {};

    Object.values(error.errors).forEach((err) => {
      errors[err.path] = err.message;
    });

    return errors;
  }

  return null;
};
