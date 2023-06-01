import { DataTypes } from 'sequelize';
import sequelize from '../db/sequelize.js';
var Styles = sequelize.define('styles', {
    id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
    },
    productid: {
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sale_price: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    original_price: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    default_style: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, { timestamps: false });
export default Styles;
//# sourceMappingURL=Styles.js.map