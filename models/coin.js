'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class coin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      coin.hasMany(models.wallet)
      coin.hasMany(models.transaction)
    }
    coin.associate = function (models) {
    coin.belongsto (models,wallet)
    coin.belongsto (models,transaction);
  }
  coin.init({
    coin: DataTypes.STRING,
    fullname: DataTypes.STRING,
    amount: DataTypes.DOUBLE,
    wallet_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'coin',
  });
  return coin;
};