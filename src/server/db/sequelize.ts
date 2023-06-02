import { Sequelize, DataTypes, Deferrable } from 'sequelize'
import dotenv from 'dotenv'
import fs from 'node:fs'
import path from 'node:path'

dotenv.config()

const dbName = process.env.DB_NAME || ''
const dbUser = process.env.DB_USER || ''
const dbPass = process.env.DB_PASSWORD || ''
const dbHost = process.env.DB_HOST || ''
const dbDriver = process.env.DB_DRIVER || ''
const dbUrl = process.env.DB_URL || ''

// connection
// const sequelize = new Sequelize(dbUrl, {
//     dialect: 'postgres',
//     benchmark: true,
//     logging: (sql, timing) => {
//         console.log(`[Execution time: ${timing}ms]
//          -  ${sql} \n`)
//     },
// })

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
    dialect: 'postgres',
    host: dbHost,
    benchmark: true,
    logging: (sql, timing) => {
      console.log(`[Execution time: ${timing}ms]\n${sql}\n`);
    },
  });


const testConnection = async () => {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}


export default sequelize
