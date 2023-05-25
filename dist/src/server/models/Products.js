import { DataTypes } from 'sequelize';
import sequelize from '../db/sequelize';
var Product = sequelize.define('Product', {
    'id': {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    'name': {
        type: DataTypes.STRING,
        allowNull: false
    },
    'slogan': {
        type: DataTypes.STRING,
        allowNull: false
    },
    'description': {
        type: DataTypes.STRING,
        allowNull: false
    },
    'category': {
        type: DataTypes.STRING,
        allowNull: false
    },
    'default_price': {
        type: DataTypes.NUMBER,
        allowNull: false
    }
});
export default Product;
//# sourceMappingURL=Products.js.map