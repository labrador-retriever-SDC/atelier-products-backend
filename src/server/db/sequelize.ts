/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Dialect, Sequelize } from 'sequelize';


const user = process.env.DB_USER as string
const password = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME as string
const dbDriver = process.env.DB_DRIVER as Dialect

const sequelize = new Sequelize(dbName, user, password, {
  host: dbHost,
  dialect: dbDriver
});


export default sequelize;