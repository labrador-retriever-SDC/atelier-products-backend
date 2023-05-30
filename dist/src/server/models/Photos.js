import { DataTypes } from 'sequelize'
import sequelize from '../db/sequelize.js'
var Photos = sequelize.define(
    'photos',
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
        url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        thumbnail_url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { timestamps: false }
)
export default Photos
//# sourceMappingURL=Photos.js.map
