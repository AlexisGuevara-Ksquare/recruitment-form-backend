"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PersonalInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PersonalInfo.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      lastName: DataTypes.STRING,
      second_last_name: DataTypes.STRING,
      gender: DataTypes.STRING,
      gender_other: DataTypes.STRING,
      date_of_birth: DataTypes.STRING,
      city_of_birth: DataTypes.STRING,
      state_of_birth: DataTypes.STRING,
      country_of_birth: DataTypes.STRING,
      user_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "PersonalInfo",
    }
  );
  return PersonalInfo;
};
