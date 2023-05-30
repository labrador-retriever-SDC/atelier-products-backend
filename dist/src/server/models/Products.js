import { DataTypes } from 'sequelize'
import sequelize from '../db/sequelize.js'
var products = sequelize.define(
    'products',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        slogan: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        default_price: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
    },
    { timestamps: false }
)
export default products
//# sourceMappingURL=Products.js.map
