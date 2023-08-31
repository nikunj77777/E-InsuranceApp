'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('insuranceplans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      insurancetype_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'insurancetypes',
          key: 'id',
        }
      },
      insurancescheme_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'insuranceschemes',
          key: 'id',
        }
      },
      insurance_name: {
        type: Sequelize.STRING
      },
      insurance_type: {
        type: Sequelize.STRING
      },
      min_age: {
        type: Sequelize.INTEGER
      },
      max_age: {
        type: Sequelize.INTEGER
      },
      min_investment: {
        type: Sequelize.INTEGER
      },
      max_investment: {
        type: Sequelize.INTEGER
      },
      policy_term_min: {
        type: Sequelize.INTEGER
      },
      policy_term_max: {
        type: Sequelize.INTEGER
      },
      profit: {
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('insuranceplans');
  }
};