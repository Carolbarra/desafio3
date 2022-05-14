'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      value: {
        type: Sequelize.DOUBLE
      },
      date_time: {
        type: Sequelize.DATE
      },
      send_to: {
        type: Sequelize.STRING
      },
      receive_from: {
        type: Sequelize.STRING
      },
      current_cotation: {
        type: Sequelize.DOUBLE
      },
      coin_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transactions');
  }
};