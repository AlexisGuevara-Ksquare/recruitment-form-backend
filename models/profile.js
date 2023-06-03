'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Profile.init({
    phone: DataTypes.STRING,
    country_code: DataTypes.STRING,
    email: DataTypes.STRING,
    alt_email: DataTypes.STRING,
    reference: DataTypes.STRING,
    other_reference: DataTypes.STRING,
    other_reference: DataTypes.STRING,
    user_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};