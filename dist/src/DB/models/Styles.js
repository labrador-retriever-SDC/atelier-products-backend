import { DataTypes } from 'sequelize';
import sequelize from '../postgresETL.ts';
var Style = sequelize.define('Style', {
    'id': {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    'product_id': {
        type: DataTypes.INTEGER,
        references: 'products',
        referencesKey: 'id'
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
export default Style;
//# sourceMappingURL=Styles.js.map