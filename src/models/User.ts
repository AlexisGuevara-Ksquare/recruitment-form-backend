import {
  Model,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from "sequelize";

import { sequelize } from "../DB/connection";

export class User extends Model<InferCreationAttributes<User>> {
  declare id: CreationOptional<number>;
  declare userName: string;
  declare firstName: string;
  declare lastName: string;
  declare email: string;
  declare phone: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userName: {
      type: DataTypes.STRING,
    },
    firstName: {
      type: DataTypes.STRING,
    },

    lastName: {
      type: DataTypes.STRING,
    },

    email: {
      type: DataTypes.STRING,
    },

    phone: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
  }
);

export default User;
