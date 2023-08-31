'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class insurancetype extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.insurancetype.hasMany(models.insurancescheme)
      models.insurancetype.hasMany(models.insuranceplan)
    }
  }
  insurancetype.init({
    insuranceType: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'insurancetype',
    underscored: true,
    paranoid:true
  });
  return insurancetype;
};