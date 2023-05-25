"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var postgresETL_ts_1 = __importDefault(require("../postgresETL.ts"));
var Product = postgresETL_ts_1.default.define('Product', {
    'id': {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    'name': {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    'slogan': {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    'description': {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    'category': {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    'default_price': {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    }
});
exports.default = Product;
//# sourceMappingURL=Product.js.map