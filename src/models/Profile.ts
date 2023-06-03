import {
  Model,
  InferCreationAttributes,
  DataTypes,
  CreationOptional,
} from "sequelize";

import { sequelize } from "../DB/connection";

export class Profile extends Model<InferCreationAttributes<Profile>> {
  declare id: CreationOptional<number>;
  declare phone: string;
  declare country_code: string;
  declare email: string;
  declare alt_email: string;
  declare reference: string;
  declare other_reference: string;
  declare user_id: string;
}

Profile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    phone: {
      type: DataTypes.STRING,
    },
    country_code: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    alt_email: {
      type: DataTypes.STRING,
    },
    reference: {
      type: DataTypes.STRING,
      validate: {
        isIn: [
          [
            "recommendation",
            "facebook",
            "linkedin",
            "instragram",
            "university",
            "google",
            "other",
          ],
        ],
      },
    },
    other_reference: {
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

export default Profile;
