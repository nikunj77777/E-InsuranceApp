'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class city extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.city.belongsTo(models.state)
    }
  }
  city.init({
    stateId: DataTypes.INTEGER,
    cityName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'city',
    underscored: true,
    paranoid:true
  });
  return city;
};