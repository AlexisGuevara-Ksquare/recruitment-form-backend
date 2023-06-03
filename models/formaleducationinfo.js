'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FormalEducationInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FormalEducationInfo.init({
    university_name: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    career_name: DataTypes.STRING,
    classes_completed: DataTypes.BOOLEAN,
    proof_classes_completed: DataTypes.STRING,
    degree_completed: DataTypes.BOOLEAN,
    proof_degree_completed: DataTypes.STRING,
    license_completed: DataTypes.BOOLEAN,
    proof_license_completed: DataTypes.STRING,
    user_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FormalEducationInfo',
  });
  return FormalEducationInfo;
};