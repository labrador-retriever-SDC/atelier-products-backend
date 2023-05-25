import { DataTypes} from 'sequelize'
import sequelize from '../postgresETL.ts'

const Photo = sequelize.define('Photo', {
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
})

export default Photo;