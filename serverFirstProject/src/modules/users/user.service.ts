import { IUser } from "./user.interface";

const users: IUser[] = [];

const createUser = (payload: IUser): IUser => {
  users.push(payload);
  return payload;
};

const getAllUsers = (): IUser[] => {
  return users;
};

export const UserService = {
  createUser,
  getAllUsers,
};
