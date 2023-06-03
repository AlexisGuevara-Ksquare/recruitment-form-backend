import { Model, InferCreationAttributes, DataTypes } from "sequelize";

import { sequelize } from "../DB/connection";

export class AddressExtraInfo extends Model<
  InferCreationAttributes<AddressExtraInfo>
> {
  declare type_of_residency: string;
  declare other_residency: string;
  declare people: string;
  declare address_id: number;
}

AddressExtraInfo.init(
  {
    type_of_residency: {
      type: DataTypes.STRING,
      validate: {
        isIn: [["rented", "owned", "other"]],
      },
    },
    other_residency: {
      type: DataTypes.STRING,
    },
    people: {
      type: DataTypes.STRING,
      validate: {
        isIn: [["alone", "parents", "couple", "couple_childs"]],
      },
    },
    address_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
  }
);

export default AddressExtraInfo;
