import {
  Model,
  InferCreationAttributes,
  DataTypes,
  CreationOptional,
} from "sequelize";

import { sequelize } from "../DB/connection";

export class ScholarshipInfo extends Model<
  InferCreationAttributes<ScholarshipInfo>
> {
  declare id: CreationOptional<number>;
  declare level: string;
  declare kind: string;
  declare period: string;
  declare user_id: string;
}

ScholarshipInfo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    level: {
      type: DataTypes.STRING,
      validate: {
        isIn: [["highschool", "university", "masters", "phd"]],
      },
    },
    kind: {
      type: DataTypes.STRING,
      validate: {
        isIn: [["academics", "sports", "government"]],
      },
    },
    period: {
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

export default ScholarshipInfo;
