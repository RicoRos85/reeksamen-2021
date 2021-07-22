'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('UserInterests', {

      id_user: {
        allowNull: false,
        // primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_interest: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
