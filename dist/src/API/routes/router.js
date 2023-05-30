import express from 'express'
import controller from '../controllers/controller.js'
var Router = express.Router({ mergeParams: true })
Router.get('/products', function (req, res) {
    // figre out how to extract page and count
    var query = {
        page: req.query.page || '1',
        count: req.query.count || '5',
    }
    controller
        .getProducts(query)
        .then(function (data) {
            res.send(data)
        })
        .catch(function (err) {
            res.send('Error getting products')
        })
})
Router.get('/products/:id', function (req, res) {
    console.log('req params', req.params)
    var productId = Number(req.params.id)
    controller
        .getProductInfo(productId)
        .then(function (data) {
            res.send(data)
        })
        .catch(function (err) {
            res.send('Error getting product info')
        })
})
Router.get('/products/:id/styles', function (req, res) {
    var productId = Number(req.params.id)
    controller
        .getProductStyles(productId)
        .then(function (data) {
            var styles = {
                product_id: productId,
                results:
                    data === null || data === void 0
                        ? void 0
                        : data.map(function (style) {
                              return {
                                  style_id: style.id,
                                  name: style.name,
                                  sale_price:
                                      style.sale_price === 'null'
                                          ? null
                                          : style.sale_price,
                                  original_price: style.original_price,
                                  'default?':
                                      style.default_style === 0 ? false : true,
                                  photos: style.photos,
                                  skus: style.skus,
                              }
                          }),
            }
            res.send(styles)
        })
        .catch(function (err) {
            res.send(err)
        })
})
Router.get('/products/:id/related', function (req, res) {
    var productId = Number(req.params.id)
    controller
        .getRelatedProducts(productId)
        .then(function (data) {
            res.send(data)
        })
        .catch(function (err) {
            res.send('Error getting related products')
        })
})
export default Router
//# sourceMappingURL=router.js.map
