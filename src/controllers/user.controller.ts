import { Request, Response } from "express";
import { User } from "../models/User";

// Create User
export const createUser = async (req: Request, res: Response) => {
  const { userName, firstName, lastName, email, phone } = req.body;
  try {
    const userExist = await User.findOne({
      where: { userName },
    });
    if (userExist) {
      return res.status(409).json({
        msg: "Username already exist",
      });
    }
    const newUser = await User.create({
      userName,
      firstName,
      lastName,
      email,
      phone,
    });

    res.status(201).json({
      newUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Server error",
    });
  }
};

// Find user
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    if (!users || users.length === 0) {
      return res.status(404).json({
        msg: "Users not found",
      });
    }
    res.status(200).json({
      users,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Server error",
    });
  }
};

// Put
export const updateUserByUserName = async (req: Request, res: Response) => {
  const { userName } = req.params;
  const { firstName, lastName, email, phone } = req.body;
  try {
    const result = await User.update(
      {
        firstName,
        lastName,
        email,
        phone,
      },
      {
        where: {
          userName,
        },
      }
    );

    res.status(201).json({
      result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Server error",
    });
  }
};

export const getUserByUserName = async (req: Request, res: Response) => {
  const userName = req.params.userName;

  try {
    const user = await User.findOne({ where: { userName } });
    if (!user) {
      return res.status(404).json({
        msg: "User not found",
      });
    }
    res.status(200).json({
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Server error",
    });
  }
};

// Delete
export const deleteUserByUserName = async (req: Request, res: Response) => {
  const userName = req.params.userName;

  try {
    const user = await User.findOne({ where: { userName } });
    if (!user) {
      return res.status(404).json({
        msg: "User not found",
      });
    }

    await user.destroy();

    res.status(200).json({
      msg: "User deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Server error",
    });
  }
};

export default { createUser };
