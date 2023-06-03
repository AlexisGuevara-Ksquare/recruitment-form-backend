import {
  Model,
  InferCreationAttributes,
  DataTypes,
  CreationOptional,
} from "sequelize";

import { sequelize } from "../DB/connection";

export class GovernmentInfo extends Model<
  InferCreationAttributes<GovernmentInfo>
> {
  declare id: CreationOptional<number>;
  declare CURP: string;
  declare identification_number: string;
  declare user_id: string;
}

GovernmentInfo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    CURP: {
      type: DataTypes.STRING,
    },
    identification_number: {
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

export default GovernmentInfo;
