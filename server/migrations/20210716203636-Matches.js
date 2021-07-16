'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Matches', { 
         user1: {
           type: Sequelize.INTEGER
         },
         user2: {
          type: Sequelize.INTEGER
        },
        Interest: {
          type: Sequelize.INTEGER 
        },
        distance: {
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
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('Matches');
  }
};
