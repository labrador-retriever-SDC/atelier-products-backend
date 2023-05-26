import express from 'express';
// import controller from '../controllers/controller.ts';
var Router = express.Router();
//
Router.get('/products', function (req, res) {
    // figre out how to extract page and count
    // write a function that queries database for requestd info
    // send requested info
    res.send('You have reached products endpoint');
});
Router.get('/products/:id', function (req, res) {
    // get params from request
    // write func that queries db with params
    // return response from db
    // somewhow format the data into the expected format
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