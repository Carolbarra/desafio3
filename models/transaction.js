'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      transaction.hasMany(models.wallet)
      transaction.hasMany(models.coin)
    }
    transaction.associate = function (models) {
    transaction.belongsto (models,coin)
    transaction.belongsto (models,wallet);
  }
  transaction.init({
    value: DataTypes.DOUBLE,
    date_time: DataTypes.DATE,
    send_to: DataTypes.STRING,
    receive_from: DataTypes.STRING,
    current_cotation: DataTypes.DOUBLE,
    coin_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'transaction',
  });
  return transaction;
};