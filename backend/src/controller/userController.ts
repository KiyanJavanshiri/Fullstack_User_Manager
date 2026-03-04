import type { Request, Response } from "express";
import { User } from "../model/User";
import { validationError } from "./../utils/validationError";

export const getAllUsers = async (req: Request, resp: Response) => {
  try {
    const users = await User.find({});
    resp.status(200).json({
      success: true,
      status: 200,
      data: users,
    });
  } catch (ex) {
    const errors = validationError(ex);
    const status = errors ? 400 : 500;

    resp.status(status).json({
      success: false,
      status,
      error: errors ?? "server error",
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
        message: `user with id ${id} was not found`,
      });
      return;
    }

    resp.status(200).json({
      success: true,
      status: 200,
      data: user,
    });
  } catch (ex) {
    const errors = validationError(ex);
    const status = errors ? 400 : 500;

    resp.status(status).json({
      success: false,
      status,
      error: errors ?? "server error",
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
    const errors = validationError(ex);
    const status = errors ? 400 : 500;

    resp.status(status).json({
      success: false,
      status,
      error: errors ?? "server error",
    });
  }
};

export const deleteUserById = async (req: Request, resp: Response) => {
  try {
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
  } catch (ex) {
    const errors = validationError(ex);
    const status = errors ? 400 : 500;

    resp.status(status).json({
      success: false,
      status,
      error: errors ?? "server error",
    });
  }
};
