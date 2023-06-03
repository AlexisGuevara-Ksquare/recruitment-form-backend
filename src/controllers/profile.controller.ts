import { Request, Response } from "express";
import Profile from "../models/Profile";

// Create User
export const createUser = async (req: Request, res: Response) => {
  const {
    id,
    phone,
    country_code,
    email,
    alt_email,
    reference,
    other_reference,
  } = req.body;
  try {
    const userExist = await Profile.findByPk(id);
    if (userExist) {
      return res.status(409).json({
        msg: "ID already exists",
      });
    }
    const newUser = await Profile.create({
      id,
      phone,
      country_code,
      email,
      alt_email,
      reference,
      other_reference,
      user_id: "<valor_user_id>",
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

// Find
export const getUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if (isNaN(Number(id))) {
      return res.status(400).json({
        msg: "Bad params",
      });
    }
    const user = await Profile.findByPk(Number(id));
    if (!user) {
      return res.status(404).json({
        msg: "User not found",
      });
    }
    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Server error",
    });
  }
};

// Put
export const updateUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { phone, country_code, email, alt_email, reference, other_reference } =
    req.body;
  try {
    const result = await Profile.update(
      {
        phone,
        country_code,
        email,
        alt_email,
        reference,
        other_reference,
      },
      {
        where: {
          id,
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

// Delete
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if (isNaN(Number(id))) {
      return res.status(400).json({
        msg: "Bad params",
      });
    }
    const user = await Profile.findByPk(Number(id));
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

export default { getUser, deleteUser };
