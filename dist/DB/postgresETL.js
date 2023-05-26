'use strict'
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod }
    }
Object.defineProperty(exports, '__esModule', { value: true })
/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
const sequelize_1 = __importDefault(require('sequelize'))
const sequelize = new sequelize_1.default('products', 'postgres', 'suavecoco', {
    host: 'localhost',
    dialect: 'postgres',
})
try {
    await sequelize.authenticate()
    console.log('Connection has been established succesfully')
} catch (error) {
    console.error('Unable to connect to the database:', error)
}
