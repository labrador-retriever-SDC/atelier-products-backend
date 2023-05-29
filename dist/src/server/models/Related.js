import { DataTypes } from 'sequelize';
import sequelize from '../db/sequelize.js';
var Related = sequelize.define('related', {
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
}, {
    modelName: 'Related',
    tableName: 'related',
    timestamps: false
});
export default Related;
//# sourceMappingURL=Related.js.map