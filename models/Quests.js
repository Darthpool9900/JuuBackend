const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB,
    process.env.USER,
    process.env.PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);


const User = sequelize.define('Quests',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
    },
    user_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    user_name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    quest:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    quest_answer:{
        type:DataTypes.STRING,
        allowNull:false,
    }
},{
    modelName:'Quests',
    tableName:'quests',
    timestamps:false
})


module.exports = Quest;