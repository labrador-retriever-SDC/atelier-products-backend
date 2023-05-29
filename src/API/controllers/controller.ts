import { FindAttributeOptions } from 'sequelize'
import sequelize from '../../server/db/sequelize.js'
import model from '../../server/models/model.js'
import { QueryTypes } from 'sequelize'
// import Features from 'src/server/models/Features.js'

const controller = {
    getProducts: async (query: any) => {
        try {
            const data = await model.products.findAll({
                limit: Number(query.count),
                attributes: [
                    'id',
                    'name',
                    'slogan',
                    'description',
                    'category',
                    'default_price',
                ],
            })
            return data
        } catch (err) {
            console.log('Error getting products from db')
        }
    },

    // SEQUELIZE MAGIC ._
      getProductInfo: async (productId: number) => {
        try {
          const data = await model.products.findOne({include: [{model: model.Features}], where: {id: productId}, attributes: [
            'id',
            'name',
            'slogan',
            'description',
            'category',
            'default_price',
        ]})
          return data;
        } catch (err) {
          console.log('Error getting product details', err);
        }
      },

    getProductStyles: async (productId: number) => {

    },

      getRelatedProducts: async (productId: number) => {
        try {
          const data = await model.Related.findAll({
            where: {current_product_id: productId},
            attributes: ['related_product_id'],
            raw: true
          })
          return data.map((item: any) => {return item.related_product_id as number})
        } catch (err) {
          console.log('Error getting related products', err);
        }
      }
}

export default controller
