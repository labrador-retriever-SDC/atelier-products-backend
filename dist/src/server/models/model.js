import Features from './Features.js';
import Photos from './Photos.js';
import Products from './Products.js';
import Related from './Related.js';
import Skus from './Skus.js';
import Styles from './Styles.js';
var model = {
    Features: Features,
    Photos: Photos,
    Products: Products,
    Related: Related,
    Skus: Skus,
    Styles: Styles,
};
// Relationships
Products.hasMany(Features, { foreignKey: 'product_id' });
Products.hasMany(Related, { foreignKey: 'current_product_id' });
Products.hasMany(Styles, { foreignKey: 'productid' });
Styles.hasMany(Skus, { foreignKey: 'styleid' });
Styles.hasMany(Photos, { foreignKey: 'styleid' });
Skus.belongsTo(Styles, { foreignKey: 'styleid' });
Photos.belongsTo(Styles, { foreignKey: 'styleid' });
Styles.belongsTo(Products, { foreignKey: 'productid' });
Related.belongsTo(Products, { foreignKey: 'current_product_id' });
Features.belongsTo(Products, { foreignKey: 'product_id' });
export default model;
//# sourceMappingURL=model.js.map