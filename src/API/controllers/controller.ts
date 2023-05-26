import sequelize from '../../server/db/sequelize.js';


const controller = {

  getProducts: (query: Query<string>) => {
    console.log('Page:', parseInt(query.page), 'Count', parseInt(query.count));
    // query db async
    // return data
  },

  getProductInfo: (productId: number) => {
    console.log('You are requesting product info for product #', productId)
  },

  getProductStyles: (productId: number) => {
    console.log('You are requesting styles for product #', productId)
  },

  getRelatedProducts: (productId: number) => {
    console.log('You are requesting related products for product #', productId);
  }

}

export default controller;