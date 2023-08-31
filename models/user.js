'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.user.belongsTo(models.role)
      models.user.hasMany(models.policy, {
        foreignKey: "cust_id"
      })
    }
  }
  user.init({
    roleId: DataTypes.INTEGER,
    fullName: DataTypes.STRING,
    loginId: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    pincode: DataTypes.INTEGER,
    mobileNo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
    underscored: true,
  });
  return user;
};