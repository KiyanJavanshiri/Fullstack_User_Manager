import mongoose from "mongoose";
import type { Request, Response, NextFunction } from "express";

const errorValidator = (error: unknown): Record<string, string> | null => {
  const errors: Record<string, string> = {};
  if (error instanceof mongoose.Error.ValidationError) {
    Object.values(error.errors).forEach((err) => {
      errors[err.path] = err.message;
    });
    return errors;
  }

  if (error instanceof mongoose.Error.CastError) {
    errors["message"] = error.message;
    return errors;
  }

  return null;
};

export const errorHandler = (
  error: unknown,
  req: Request,
  resp: Response,
  next: NextFunction,
) => {
  const errors = errorValidator(error);

  const status = errors ? 400 : 500;

  resp.status(status).json({
    success: false,
    status,
    error: errors ?? "server error",
  });
};
