//id,name,email,password,contactNum,address


const {DataTypes} = require("sequelize");
const {sequelize} = require('../config/db')

const User = sequelize.define("User",{
    id:{
        type:DataTypes.BIGINT.UNSIGNED,
        primaryKey:true,
        autoIncrement:true,
    },

    name:{
        type:DataTypes.STRING(255),
        allowNull:false,
        validate:{notEmpty:true},
    },

    email:{
        type:DataTypes.STRING(150),
        unique:true,
        allowNull:false,
        validate:{isEmail:true},
    },

    password:{
        type:DataTypes.STRING(250),
        allowNull:false,
    },

    phone:{
        type:DataTypes.STRING(12),
        allowNull:false,
    },

    address:{
        type:DataTypes.STRING(255),
        allowNull:false,
    },
    role:{
        type:DataTypes.ENUM('Admin','User'),
        defaultValue:'User',
    }
},
{
    tableName:"users",
    timestamps:true
}
);

module.exports= User;