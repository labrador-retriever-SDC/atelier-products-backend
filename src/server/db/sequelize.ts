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
const sequelize = new Sequelize(dbName, dbUser, dbPass, {
    host: dbHost,
    port: 5432,
    dialect: 'postgres',
    benchmark: true,
    logging: (sql, timing) => {
        console.log(`[Execution time: ${timing}ms]
         -  ${sql} \n`)
    },
})

// const sequelize = new Sequelize(dbUrl, {
//     benchmark: true,
//     logging: (sql, timing) => {
//         console.log(`[Execution time: ${timing}ms] - ${sql} \n`);
//     }
// });

const testConnection = async () => {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}

/**
 * Seeding data by executing seed.sql
 */
// db.sync()
//   .then(() => Products.count())
//   .then((count) => {
//     // run seed.sql only if Reviews is empty
//     if (count === 0) {
//       const sqlString = fs.readFileSync(path.join(__dirname, '/seed.sql'), 'utf8');
//       return db.query(sqlString);
//     }
//     return undefined;
//   })
//   .then(() => console.log("Done seeding data."))
//   .catch(err => console.log("Error seeding data", err))
//   .then(() => process.exit());

export default sequelize
