'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('servicos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allownull: false,
      },
      name: {
        type: Sequelize.STRING,
        allownull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allownull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allownull: false,
      },
    });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('servicos');
  }
};
