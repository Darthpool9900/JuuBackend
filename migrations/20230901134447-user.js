'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('user',{
        id:{
            type:Sequelize.DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
        },
        user_name:{
            type:Sequelize.DataTypes.STRING,
            allowNull:false,
        },
        user_name_email:{
            type:Sequelize.DataTypes.STRING,
            allowNull:false,
        },
        password:{
            type:Sequelize.DataTypes.STRING,
            allowNull:false,
        }
   },{
    timestamp:false
   })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('user')
  }
};
