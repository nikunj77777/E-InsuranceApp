'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.payment.belongsTo(models.policy,{
        foreignKey: "cust_policy_id", 
      })
    }
  }
  payment.init({
    custPolicyId: DataTypes.INTEGER,
    dueDate: DataTypes.DATE,
    paidDate: DataTypes.DATE,
    installmentAmount: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'payment',
    underscored: true,
    paranoid:true
  });
  return payment;
};