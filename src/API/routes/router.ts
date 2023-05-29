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
    controller.getProductStyles(productId)
    res.send()
})

Router.get('/products/:id/related', (req, res) => {
    let productId = Number(req.params.id) as number
    controller.getRelatedProducts(productId)
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.send('Error getting related products')
    })
})

export default Router
