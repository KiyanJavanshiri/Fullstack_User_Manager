import type { Request, Response } from "express";
import { User } from "../model/User";

export const getAllUsers = async (req: Request, resp: Response) => {
  try {
    const users = await User.find({});
    resp.status(200).json({
      success: true,
      status: 200,
      data: users,
    });
  } catch (ex) {
    console.error(ex);
    resp.status(500).json({
      success: false,
      status: 500,
      error: ex,
    });
  }
};
