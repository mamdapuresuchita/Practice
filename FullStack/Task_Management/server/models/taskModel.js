//title;description;startDate;endDate;Status['Pending','Completed','In Process'];Priority['low','medium','high']


const {DataTypes}=require('sequelize')
const{sequelize}=require('../config/db')
const { timeStamp } = require('console')

const Task = sequelize.define("Task",{
    id:{
        type:DataTypes.BIGINT.UNSIGNED,
        primaryKey:true,
        autoIncrement:true,


    },

    title:{
        type:DataTypes.STRING(200),
        allowNull:false,
        validate:{
            notEmpty:true
        }
    },

    description:{
        type:DataTypes.STRING(500),
        allowNull:true,
    
    },

    status:{
        type:DataTypes.ENUM('Pending','In Process','Done'),
        defaultValue:'Pending'
    },

    priority:{
        type:DataTypes.ENUM('low','medium','high','critical'),
        defaultValue:'medium'
    },
    startDate:{
        type:DataTypes.DATE

    },
    startDate:{
        type:DataTypes.DATE

    },

    endDate:{
        type:DataTypes.DATE

    },
    createdBy:{
        type:DataTypes.STRING
    },
    updatedBy:{
        type:DataTypes.STRING
    }

    // assignTo,createdBy,updatedBy

},{
    tableName:'tasks',
    timeStamps:true
})

module.exports=Task