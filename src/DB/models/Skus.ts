import { DataTypes} from 'sequelize'
import sequelize from '../postgresETL.ts'

const Sku = sequelize.define('Sku', {
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

export default Sku;