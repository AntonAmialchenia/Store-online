const {Sequelize} = require('sequelize')
require('dotenv').config();

module.exports = new Sequelize(
    process.env.DB_NAME, // Название БД
    process.env.DB_USER, // ПОльзователь
    process.env.DB_PASSWORD, // пароль
    // 'online_store',
    // 'postgres',
    // 'admin',
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        pool: {
            max: 15,
            min: 5,
            idle: 20000,
            evict: 15000,
            acquire: 30000
          },
    }
    
)