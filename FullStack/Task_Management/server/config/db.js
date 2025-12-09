require('dotenv').config()

const{Sequelize}=require('sequelize')


const sequelize= new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
    host:process.env.DB_HOST,
    port:process.env.DB_PORT ||3306,
    dialect:'mysql',
    // pool:{
    //     max:5,
    //     min:0,

    // }

    define:{
        timestamps:true
    }

})

async function testConnection(){
try {
    await sequelize.authenticate()
        console.log("Database connnection established")
    
} catch (error) {
    console.log('Unable to connect to database')
}
}

async function syncDB(){
    try {
        await sequelize.sync({force:false,alter:false})
        console.log('✅ All models were synchronized successfully.');
        
    } catch (error) {
        console.error('❌ Error syncing models:', error);
    }
}
syncDB();

module.exports={sequelize,testConnection,syncDB}