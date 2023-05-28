import { DataTypes } from 'sequelize'
import sequelize from '../db/sequelize.js'

const Related = sequelize.define(
    'related',
    {
        id: {
            type: DataTypes.NUMBER,
            allowNull: false,
            primaryKey: true,
        },
        current_product_id: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        related_product_id: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
    },
    { timestamps: false }
)

export default Related
