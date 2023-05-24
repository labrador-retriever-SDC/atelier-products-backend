"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
var sequelize_1 = require("sequelize");
var username = 'postgres';
var password = 'suavecoco';
var sequelize = new sequelize_1.Sequelize('products', username, password, {
    host: 'localhost',
    dialect: 'postgres'
});
exports.default = sequelize;
//# sourceMappingURL=postgresETL.js.map