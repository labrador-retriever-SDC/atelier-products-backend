import { DataTypes} from 'sequelize'
import sequelize from '../db/sequelize';

const Related = sequelize.define('Related', {
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
}, {timestamps: false})

export default Related;
