import { Model, DataTypes } from 'sequelize'
import sequelize from '../db/sequelize.js';


const Features = sequelize.define('Features', {
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
}, {timestamps: false})

export default Features;
