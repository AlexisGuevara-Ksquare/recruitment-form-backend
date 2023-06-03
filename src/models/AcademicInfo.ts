import {
  Model,
  InferCreationAttributes,
  DataTypes,
  CreationOptional,
} from "sequelize";

import { sequelize } from "../DB/connection";

export class AcademicInfo extends Model<InferCreationAttributes<AcademicInfo>> {
  declare id: CreationOptional<number>;
  declare software_devel_comments: string;
  declare degree_level: string;
  declare informal_education: string;
  declare other_education: string;
  declare user_id: string;
}

AcademicInfo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    software_devel_comments: {
      type: DataTypes.STRING,
    },
    degree_level: {
      type: DataTypes.STRING,
      validate: {
        isIn: [
          [
            "highschool",
            "incomplete_university",
            "university",
            "masters",
            "incomplete_masters",
            "phd",
            "incomplete_phd",
            "none",
            "other",
          ],
        ],
      },
    },
    informal_education: {
      type: DataTypes.STRING,
    },
    other_education: {
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

export default AcademicInfo;
