'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class insuranceplan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.insuranceplan.belongsTo(models.insurancetype)
      models.insuranceplan.belongsTo(models.insurancescheme)
      models.insuranceplan.hasMany(models.policy,{
        foreignKey: "policy_id", // change column name

      })
    }
  }
  insuranceplan.init({
    insurancetypeId: DataTypes.INTEGER,
    insuranceschemeId: DataTypes.INTEGER,
    insuranceName: DataTypes.STRING,
    insuranceType: DataTypes.STRING,
    minAge: DataTypes.INTEGER,
    maxAge: DataTypes.INTEGER,
    minInvestment: DataTypes.INTEGER,
    maxInvestment: DataTypes.INTEGER,
    policyTermMin: DataTypes.INTEGER,
    policyTermMax: DataTypes.INTEGER,
    profit: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'insuranceplan',
    underscored: true,
    paranoid:true
  });
  return insuranceplan;
};