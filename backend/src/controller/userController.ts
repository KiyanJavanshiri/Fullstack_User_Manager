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

export const getUserById = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);

    if (!user) {
      resp.status(404).json({
        success: false,
        status: 404,
        data: null,
      });
      return;
    }

    resp.status(200).json({
      success: true,
      status: 200,
      data: user,
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

export const createUser = async (req: Request, resp: Response) => {
  try {
    const user = await User.create(req.body);
    resp.status(201).json({
      success: true,
      status: 201,
      data: user,
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
