import { DataTypes } from 'sequelize'
import sequelize  from '../db/sequelize.js';

const Photos = sequelize.define('Photos', {
id: {
  type: DataTypes.NUMBER,
  allowNull: false
},
styleId: {
  type: DataTypes.NUMBER,
  allowNull: false
},
url: {
  type: DataTypes.STRING,
  allowNull: false
},
thumbnail_url: {
  type: DataTypes.STRING,
  allowNull: false
}
}, {timestamps: false})

export default Photos;
