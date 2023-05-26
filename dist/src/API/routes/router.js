import express from 'express';
// import controller from '../controllers/controller.ts';
var Router = express.Router();
//
Router.get('/products', function (req, res) {
    res.send('You have reached products endpoint');
});
Router.get('/products/:id', function (req, res) {
    res.send('You have reached product information');
});
Router.get('/products/:id/styles', function (req, res) {
    res.send('You have reached product styles');
});
Router.get('/products/:id/related', function (req, res) {
    res.send('You have reached related products');
});
export default Router;
//# sourceMappingURL=router.js.map