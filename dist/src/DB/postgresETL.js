"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
var sequelize_1 = __importDefault(require("sequelize"));
var username = 'postgres';
var password = 'suavecoco';
var sequelize = new sequelize_1.default('products', username, password, {
    host: 'localhost',
    dialect: 'postgres'
});
exports.default = sequelize;
//# sourceMappingURL=postgresETL.js.map