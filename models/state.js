'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class state extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.state.hasMany(models.city)
    }
  }
  state.init({
    stateName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'state',
    underscored: true,
    paranoid:true
  });
  return state;
};