import express from 'express'
import controller from '../controllers/controller.js'

const Router = express.Router({ mergeParams: true })

Router.get('/products', (req, res) => {
    // figre out how to extract page and count
    const query = {
        page: req.query.page || '1',
        count: req.query.count || '5',
    }
    controller
        .getProducts(query)
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.send('Error getting products')
        })
})

Router.get('/products/:id', (req, res) => {
    console.log('req params', req.params)
    let productId = Number(req.params.id) as number
    controller
        .getProductInfo(productId)
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.send('Error getting product info')
        })
})

Router.get('/products/:id/styles', (req, res) => {
    let productId = Number(req.params.id) as number
    controller
        .getProductStyles(productId)
        .then((data) => {
            let styles: any = {
                product_id: productId,
                results: data?.map((style: any) => {
                    return {
                        style_id: style.id as number,
                        name: style.name as string,
                        sale_price:
                            style.sale_price === 'null'
                                ? null
                                : (style.sale_price as any),
                        original_price: style.original_price as number,
                        'default?': style.default_style === 0 ? false : true,
                        photos: style.photos,
                        skus: style.skus,
                    }
                }),
            }
            res.send(styles)
        })
        .catch((err) => {
            res.send(err)
        })
})

Router.get('/products/:id/related', (req, res) => {
    let productId = Number(req.params.id) as number
    controller
        .getRelatedProducts(productId)
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.send('Error getting related products')
        })
})

Router.get('/loaderio-00c891d6681a76242a5009d05c322923', (req, res) => {
    res.send('loaderio-00c891d6681a76242a5009d05c322923')
})

export default Router
