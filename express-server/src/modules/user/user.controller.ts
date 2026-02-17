import { Request, Response } from "express";
import { createUser } from "./user.service";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const { name, email, age } = req.body;

    const user = await createUser(name, email, age);

    res.status(201).json({
      message: "User created successfully ✅",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create user ",
    });
  }
};
