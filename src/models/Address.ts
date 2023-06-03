import {
  Model,
  InferCreationAttributes,
  DataTypes,
  CreationOptional,
} from "sequelize";

import { sequelize } from "../DB/connection";

export class Address extends Model<InferCreationAttributes<Address>> {
  declare id: CreationOptional<number>;
  declare street: string;
  declare in_between_street_a: string;
  declare in_between_street_b: string;
  declare city: string;
  declare state: string;
  declare country: string;
  declare zip: string;
  declare proof_of_address: string;
  declare user_id: number;
}

Address.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    street: {
      type: DataTypes.STRING,
    },
    in_between_street_a: {
      type: DataTypes.STRING,
    },
    in_between_street_b: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    zip: {
      type: DataTypes.STRING,
    },
    proof_of_address: {
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

export default Address;
