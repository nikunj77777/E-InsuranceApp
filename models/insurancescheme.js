'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class insurancescheme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.insurancescheme.belongsTo(models.insurancetype)
      models.insurancescheme.hasMany(models.insuranceplan)
    }
  }
  insurancescheme.init({
    insurancetypeId: DataTypes.INTEGER,
    insuranceType: DataTypes.STRING,
    insuranceNote: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'insurancescheme',
    underscored: true,
    paranoid:true
  });
  return insurancescheme;
};