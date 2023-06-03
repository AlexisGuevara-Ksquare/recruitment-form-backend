import { Request, Response } from "express";
import { PersonalInfo } from "../models/PersonalInfo";

// Create User
export const createUser = async (req: Request, res: Response) => {
  const {
    user_id,
    name,
    lastName,
    second_last_name,
    gender,
    gender_other,
    date_of_birth,
    city_of_birth,
    state_of_birth,
    country_of_birth,
  } = req.body;
  try {
    const userExist = await PersonalInfo.findOne({
      where: { user_id },
    });
    if (userExist) {
      return res.status(409).json({
        msg: "User ID already exists",
      });
    }
    const newInfo = await PersonalInfo.create({
      user_id,
      name,
      lastName,
      second_last_name,
      gender,
      gender_other,
      date_of_birth,
      city_of_birth,
      state_of_birth,
      country_of_birth,
    });

    res.status(201).json({
      newInfo,
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
    const user = await PersonalInfo.findByPk(Number(id));
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
  const {
    name,
    lastName,
    second_last_name,
    gender,
    gender_other,
    date_of_birth,
    city_of_birth,
    state_of_birth,
    country_of_birth,
  } = req.body;
  try {
    const result = await PersonalInfo.update(
      {
        name,
        lastName,
        second_last_name,
        gender,
        gender_other,
        date_of_birth,
        city_of_birth,
        state_of_birth,
        country_of_birth,
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
    const user = await PersonalInfo.findByPk(Number(id));
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
