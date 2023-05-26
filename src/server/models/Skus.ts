import { DataTypes} from 'sequelize'
import sequelize from '../db/sequelize';

const Skus = sequelize.define('Sku', {
id: {
  type: DataTypes.NUMBER,
  allowNull: false
},
styleId: {
  type: DataTypes.NUMBER,
  allowNull: false
},
size: {
  type: DataTypes.STRING,
  allowNull: false
},
quantity: {
  type: DataTypes.NUMBER,
  allowNull: false
}
})

export default Skus;