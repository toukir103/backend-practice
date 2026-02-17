import { Request, Response } from "express";
import { UserService } from "./user.service";

const createUser = (req: Request, res: Response) => {
  const result = UserService.createUser(req.body);

  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: result,
  });
};

const getAllUsers = (req: Request, res: Response) => {
  const result = UserService.getAllUsers();

  res.status(200).json({
    success: true,
    message: "Users retrieved successfully",
    data: result,
  });
};

export const UserController = {
  createUser,
  getAllUsers,
};
