import { Request, Response } from "express";
import { FormalEducationInfo } from "../models/FormalEducationInfo";

// Create User
export const createUser = async (req: Request, res: Response) => {
  const {
    user_id,
    university_name,
    state,
    country,
    career_name,
    classes_completed,
    proof_classes_completed,
    degree_completed,
    proof_degree_completed,
    license_completed,
    proof_license_completed,
  } = req.body;
  try {
    const userExist = await FormalEducationInfo.findOne({
      where: { user_id },
    });
    if (userExist) {
      return res.status(409).json({
        msg: "User ID already exists",
      });
    }
    const newInfo = await FormalEducationInfo.create({
      user_id,
      university_name,
      state,
      country,
      career_name,
      classes_completed,
      proof_classes_completed,
      degree_completed,
      proof_degree_completed,
      license_completed,
      proof_license_completed,
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

export const getUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if (isNaN(Number(id))) {
      return res.status(400).json({
        msg: "Bad params",
      });
    }
    const user = await FormalEducationInfo.findByPk(Number(id));
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
    university_name,
    state,
    country,
    career_name,
    classes_completed,
    proof_classes_completed,
    degree_completed,
    proof_degree_completed,
    license_completed,
    proof_license_completed,
  } = req.body;
  try {
    const result = await FormalEducationInfo.update(
      {
        university_name,
        state,
        country,
        career_name,
        classes_completed,
        proof_classes_completed,
        degree_completed,
        proof_degree_completed,
        license_completed,
        proof_license_completed,
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
    const user = await FormalEducationInfo.findByPk(Number(id));
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
