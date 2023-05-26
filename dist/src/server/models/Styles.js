import { DataTypes } from 'sequelize';
import sequelize from '../db/sequelize';
var Styles = sequelize.define('Style', {
    'id': {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    'product_id': {
        type: DataTypes.INTEGER,
    },
    'name': {
        type: DataTypes.STRING,
        allowNull: false
    },
    'sale_price': {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    'original_price': {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    'default_style': {
        type: DataTypes.STRING,
        allowNull: false
    }
});
export default Styles;
//# sourceMappingURL=Styles.js.map