import { DataTypes } from 'sequelize';
import sequelize from '../db/sequelize';
var Related = sequelize.define('Related', {
    id: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    current_product_id: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    related_product_id: {
        type: DataTypes.NUMBER,
        allowNull: false
    }
}, { timestamps: false });
export default Related;
//# sourceMappingURL=Related.js.map