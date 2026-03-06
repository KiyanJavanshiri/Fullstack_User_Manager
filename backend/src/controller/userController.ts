import type { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { User } from "../model/User";

export const getAllUsers = asyncHandler(
  async (req: Request, resp: Response) => {
    const users = await User.find({});
    resp.status(200).json({
      success: true,
      status: 200,
      data: users,
    });
  },
);

export const getUserById = asyncHandler(
  async (req: Request, resp: Response) => {
    const id = req.params.id;
    const user = await User.findById(id);

    if (!user) {
      resp.status(404).json({
        success: false,
        status: 404,
        message: `user with id ${id} was not found`,
      });
      return;
    }

    resp.status(200).json({
      success: true,
      status: 200,
      data: user,
    });
  },
);

export const createUser = asyncHandler(async (req: Request, resp: Response) => {
  const user = await User.create(req.body);
  resp.status(201).json({
    success: true,
    status: 201,
    data: user,
  });
});

export const updateUser = asyncHandler(async (req: Request, resp: Response) => {
  const id = req.params.id;
  const updatedUser = await User.findByIdAndUpdate(id, req.body, {
    returnDocument: "after", runValidators: true
  });

  if (!updatedUser) {
    resp.status(404).json({
      success: false,
      status: 404,
      message: `user with id ${id} was not found`,
    });
    return;
  }

  resp.status(200).json({
    success: true,
    status: 200,
    data: updatedUser,
  });
});

export const deleteUserById = asyncHandler(
  async (req: Request, resp: Response) => {
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      resp.status(404).json({
        success: false,
        status: 404,
        message: `user with id ${id} was not found`,
      });

      return;
    }

    resp.status(200).json({
      success: true,
      status: 200,
    });
  },
);
