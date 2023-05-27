import Features from './Features.js'
import Photos from './Photos.js'
import products from './Products.js'
import Related from './Related.js'
import Skus from './Skus.js'
import Styles from './Styles.js'
// import sequelize from '../db/sequelize.js'

const model = {
    Features: Features,
    Photos: Photos,
    products: products,
    Related: Related,
    Skus: Skus,
    Styles: Styles,
}

// Relationships
products.hasMany(Features)
products.hasMany(Related)
products.hasMany(Styles)
Styles.hasMany(Skus)
Styles.hasMany(Photos)
Skus.belongsTo(Styles)
Photos.belongsTo(Styles)
Styles.belongsTo(products)
Related.belongsTo(products)
Features.belongsTo(products)

export default model
