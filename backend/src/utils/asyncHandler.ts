import type { AsyncControllerFn } from "./types";
import type { Request, Response, NextFunction } from "express";

export const asyncHandler = (fn: AsyncControllerFn) => {
  return async (req: Request, resp: Response, next: NextFunction) => {
    try {
      await fn(req, resp);
    } catch (ex) {
      next(ex);
    }
  };
};
