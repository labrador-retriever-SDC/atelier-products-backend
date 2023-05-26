import { DataTypes} from 'sequelize'
import sequelize from '../db/sequelize.js';

const Features = sequelize.define('Feature', {
id: {
  type: DataTypes.NUMBER,
  allowNull: false
},
product_id: {
  type: DataTypes.NUMBER,
  allowNull: false
},
feature: {
  type: DataTypes.STRING,
  allowNull: false
},
value: {
  type: DataTypes.STRING,
  allowNull: false
}
})

export default Features;