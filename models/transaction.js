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
      // define association here
    }
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