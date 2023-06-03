import { Request, Response } from "express";
import { AddressExtraInfo } from "../models/AddressExtraInfo";

export const createUser = async (req: Request, res: Response) => {
  const { user_id } = req.body;
  try {
    const addressExist = await AddressExtraInfo.findOne({
      where: { address_id: user_id },
    });
    if (addressExist) {
      return res.status(409).json({
        msg: "User ID already exists",
      });
    }
    const newAddress = await AddressExtraInfo.create({
      address_id: user_id,
      type_of_residency: "",
      other_residency: "",
      people: "",
    });

    res.status(201).json({
      newAddress,
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
    const user = await AddressExtraInfo.findByPk(Number(id));
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
  const { type_of_residency, other_residency, people } = req.body;
  try {
    const result = await AddressExtraInfo.update(
      {
        type_of_residency,
        other_residency,
        people,
      },
      {
        where: {
          address_id: id,
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
    const user = await AddressExtraInfo.findByPk(Number(id));
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
