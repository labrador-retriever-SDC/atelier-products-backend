import express from 'express';
import controller from '../controllers/controller.js';
var Router = express.Router({ mergeParams: true });
Router.get('/products', function (req, res) {
    // figre out how to extract page and count
    var query = { page: req.query.page, count: req.query.count };
    controller.getProducts(query);
    // write a function that queries database for requestd info
    // send requested info
    res.send('You have reached products endpoint');
});
Router.get('/products/:id', function (req, res) {
    var productId = parseInt(req.params.id.substring(3));
    controller.getProductInfo(productId);
    // return response from db
    // somewhow format the data into the expected format
    res.send('You have reached product information');
});
Router.get('/products/:id/styles', function (req, res) {
    var productId = parseInt(req.params.id.substring(3));
    controller.getProductStyles(productId);
    res.send('You have reached product styles');
});
Router.get('/products/:id/related', function (req, res) {
    var productId = parseInt(req.params.id.substring(3));
    controller.getRelatedProducts(productId);
    res.send('You have reached related products');
});
export default Router;
//# sourceMappingURL=router.js.map