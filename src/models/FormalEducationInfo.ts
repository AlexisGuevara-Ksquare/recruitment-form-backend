import {
  Model,
  InferCreationAttributes,
  DataTypes,
  CreationOptional,
} from "sequelize";

import { sequelize } from "../DB/connection";

export class FormalEducationInfo extends Model<
  InferCreationAttributes<FormalEducationInfo>
> {
  declare id: CreationOptional<number>;
  declare university_name: string;
  declare state: string;
  declare country: string;
  declare career_name: string;
  declare classes_completed: boolean;
  declare proof_classes_completed: string;
  declare degree_completed: string;
  declare proof_degree_completed: string;
  declare license_completed: string;
  declare proof_license_completed: string;
  declare user_id: string;
}

FormalEducationInfo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    university_name: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    career_name: {
      type: DataTypes.STRING,
    },
    classes_completed: {
      type: DataTypes.BOOLEAN,
    },
    proof_classes_completed: {
      type: DataTypes.STRING,
    },
    degree_completed: {
      type: DataTypes.STRING,
    },
    proof_degree_completed: {
      type: DataTypes.STRING,
    },
    license_completed: {
      type: DataTypes.STRING,
    },
    proof_license_completed: {
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

export default FormalEducationInfo;
