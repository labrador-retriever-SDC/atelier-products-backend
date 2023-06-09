import { DataTypes } from 'sequelize'
import sequelize from '../db/sequelize.js'

const Skus = sequelize.define(
    'skus',
    {
        id: {
            type: DataTypes.NUMBER,
            allowNull: false,
            primaryKey: true,
        },
        styleid: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        size: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
    },
    { timestamps: false }
)

export default Skus
