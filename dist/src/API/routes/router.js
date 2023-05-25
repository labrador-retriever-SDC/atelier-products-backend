import express from 'express';
// import controller from '../controllers/controller.ts';
var Router = express.Router();
//
Router.get('', function (req, res) {
    res.send('You have reached products');
});
Router.get('/products/:id', function (req, res) {
    res.send('You have reached product information');
});
export default Router;
//# sourceMappingURL=router.js.map