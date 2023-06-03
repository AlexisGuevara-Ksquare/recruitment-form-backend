'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AddressExtraInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AddressExtraInfo.init({
    type_of_residency: DataTypes.STRING,
    other_residency: DataTypes.STRING,
    people: DataTypes.STRING,
    address_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AddressExtraInfo',
  });
  return AddressExtraInfo;
};