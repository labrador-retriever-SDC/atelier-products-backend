/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Sequelize } from 'sequelize';
var user = process.env.DB_USER;
var password = process.env.DB_PASSWORD;
var dbHost = process.env.DB_HOST;
var dbName = process.env.DB_NAME;
var dbDriver = process.env.DB_DRIVER;
var sequelizeConnection = new Sequelize(dbName, user, password, {
    host: dbHost,
    dialect: dbDriver
});
export default sequelizeConnection;
//# sourceMappingURL=postgresETL.js.map