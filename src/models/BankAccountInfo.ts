import {
  Model,
  InferCreationAttributes,
  DataTypes,
  CreationOptional,
} from "sequelize";

import { sequelize } from "../DB/connection";

export class BankAccountInfo extends Model<
  InferCreationAttributes<BankAccountInfo>
> {
  declare id: CreationOptional<number>;
  declare acc_number: string;
  declare clabe: string;
  declare bank: string;
  declare user_id: number;
}

BankAccountInfo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    acc_number: {
      type: DataTypes.STRING,
    },
    clabe: {
      type: DataTypes.STRING,
    },
    bank: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
  }
);

export default BankAccountInfo;
