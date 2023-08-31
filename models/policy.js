'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class policy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.policy.belongsTo(models.user,{
        foreignKey: "cust_id"
      })
      models.policy.belongsTo(models.insuranceplan,{
        foreignKey: "policy_id", 
      })
      models.policy.hasMany(models.payment,{
        foreignKey: "cust_policy_id", 
      })
    }
  }
  policy.init({
    custId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    policyId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'insuranceplan',
        key: 'id',
      }
    },
    totalInvestment: DataTypes.INTEGER,
    totalPeriod: DataTypes.INTEGER,
    premPeriod: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'policy',
    underscored: true,
    paranoid: true
  });
  return policy;
};