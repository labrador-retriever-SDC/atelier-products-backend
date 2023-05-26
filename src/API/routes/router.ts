import express from 'express'
import controller from '../controllers/controller.js'

const Router = express.Router({ mergeParams: true })

Router.get('/products', (req, res) => {
    // figre out how to extract page and count
    let query: Query<string> = {
        page: req.query.page as string,
        count: req.query.count as string,
    }
    controller.getProducts(query)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.send('There was an error getting products')
    })
    // write a function that queries database for requestd info
    // send requested info
    // res.send('You have reached products endpoint')
})

Router.get('/products/:id', (req, res) => {
    let productId = parseInt(req.params.id.substring(3)) as number
    controller.getProductInfo(productId)
    // return response from db
    // somewhow format the data into the expected format
    res.send('You have reached product information')
})

Router.get('/products/:id/styles', (req, res) => {
    let productId = parseInt(req.params.id.substring(3)) as number
    controller.getProductStyles(productId)

    res.send('You have reached product styles')
})

Router.get('/products/:id/related', (req, res) => {
    let productId = parseInt(req.params.id.substring(3)) as number
    controller.getRelatedProducts(productId)

    res.send('You have reached related products')
})

export default Router
