import sequelize from '../../server/db/sequelize.js'
import model from '../../server/models/model.js'

const controller = {
    getProducts: async (query: Query<string>) => {
        // console.log(
        //     'Page:',
        //     parseInt(query.page),
        //     'Count',
        //     parseInt(query.count)
        // )
        // query db async
        try {
            const data = await model.products.findAll({
                limit: Number(query.count),
                attributes: ['id', 'name', 'slogan', 'description', 'category', 'default_price']
            })
            return data;
        } catch (err) {
            console.log('Error getting products from db');
        }

    },

    getProductInfo: (productId: number) => {
        console.log('You are requesting product info for product #', productId)
    },

    getProductStyles: (productId: number) => {
        console.log('You are requesting styles for product #', productId)
    },

    getRelatedProducts: (productId: number) => {
        console.log(
            'You are requesting related products for product #',
            productId
        )
    },
}

export default controller
