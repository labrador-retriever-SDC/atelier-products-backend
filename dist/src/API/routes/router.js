import express from 'express';
import controller from '../controllers/controller.js';
var Router = express.Router({ mergeParams: true });
Router.get('/products', function (req, res) {
    // figre out how to extract page and count
    var query = {
        page: req.query.page,
        count: req.query.count,
    };
    controller
        .getProducts(query)
        .then(function (data) {
        res.send(data);
    })
        .catch(function (err) {
        res.send('Error getting products');
    });
});
Router.get('/products/:id', function (req, res) {
    console.log('req params', req.params);
    var productId = Number(req.params.id);
    controller
        .getProductInfo(productId)
        .then(function (data) {
        res.send(data);
    })
        .catch(function (err) {
        res.send('Error getting product info');
    });
});
Router.get('/products/:id/styles', function (req, res) {
    var productId = Number(req.params.id);
    controller.getProductStyles(productId);
});
Router.get('/products/:id/related', function (req, res) {
    var productId = Number(req.params.id);
    controller.getRelatedProducts(productId);
    res.send('You have reached related products');
});
export default Router;
//# sourceMappingURL=router.js.map