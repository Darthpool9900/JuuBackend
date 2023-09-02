'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Quests', {
      id:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
    },
    user_id:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false,
    },
    user_name:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false,
    },
    quest:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false,
    },
    quest_answer:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false,
    }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Quests')
  }
};
