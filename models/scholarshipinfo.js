'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ScholarshipInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ScholarshipInfo.init({
    level: DataTypes.STRING,
    kind: DataTypes.STRING,
    period: DataTypes.NUMBER,
    user_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ScholarshipInfo',
  });
  return ScholarshipInfo;
};