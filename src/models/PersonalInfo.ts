import {
  Model,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from "sequelize";

import { sequelize } from "../DB/connection";

export class PersonalInfo extends Model<InferCreationAttributes<PersonalInfo>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare lastName: string;
  declare second_last_name: string;
  declare gender: string;
  declare gender_other: string;
  declare date_of_birth: string;
  declare city_of_birth: string;
  declare state_of_birth: string;
  declare country_of_birth: string;
  declare user_id: number;
}

PersonalInfo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    second_last_name: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
    gender_other: {
      type: DataTypes.STRING,
    },
    date_of_birth: {
      type: DataTypes.STRING,
    },
    city_of_birth: {
      type: DataTypes.STRING,
    },
    state_of_birth: {
      type: DataTypes.STRING,
    },
    country_of_birth: {
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

export default PersonalInfo;
