//IdleDeadline,taskID,userID,createdBy,updatedBy

const{sequelize}=require('../config/db')
const{DataType,DataTypes}=require('sequelize')

const AssignTask =sequelize.define('AssignTask',{
    id:{
        type:DataTypes.BIGINT.UNSIGNED,
        primaryKey:true,
        autoIncrement:true
    },
    taskID:{},
    userID:{},
    createdBy:{},
    updatedBy:{}
    
},{
    timestamps:true,
    tableName:"assignTasks"
})

module.exports=AssignTask;