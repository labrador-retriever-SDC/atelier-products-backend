import { DataTypes} from 'sequelize'
import sequelize from '../postgresETL.ts'

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
})

export default Related;