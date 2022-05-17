'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => 
  class wallet extends Model {
    static associate = function (models) {
      wallet.hasMany(models.coin)
      wallet.hasMany(models.transaction)
    }
    Wallet.associate = function (models) {
    Wallet.belongsto (models,coin)
    Wallet.belongsto (models,transaction);
  }
  wallet.init({
    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'wallet',
  });
  return wallet;
};