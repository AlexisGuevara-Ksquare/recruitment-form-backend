'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AcademicInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AcademicInfo.init({
    software_devel_comments: DataTypes.STRING,
    degree_level: DataTypes.STRING,
    informal_education: DataTypes.STRING,
    other_education: DataTypes.STRING,
    user_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AcademicInfo',
  });
  return AcademicInfo;
};