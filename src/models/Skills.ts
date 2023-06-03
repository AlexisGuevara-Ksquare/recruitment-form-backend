import {
  Model,
  InferCreationAttributes,
  DataTypes,
  CreationOptional,
} from "sequelize";

import { sequelize } from "../DB/connection";

export class Skills extends Model<InferCreationAttributes<Skills>> {
  declare id: CreationOptional<number>;
  declare preferred_programming_language: string;
  declare experience: string;
  declare disability: string;
  declare user_id: number;
}

Skills.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    preferred_programming_language: {
      type: DataTypes.STRING,
    },
    experience: {
      type: DataTypes.STRING,
      validate: {
        isIn: [
          [
            "less_than_three",
            "three_to_six",
            "six_to_twelve",
            "more_than_twelve",
          ],
        ],
      },
    },
    disability: {
      type: DataTypes.STRING,
      validate: {
        isIn: [["motor", "auditory", "visual", null]],
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
  }
);

export default Skills;
