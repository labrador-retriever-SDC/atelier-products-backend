import express from 'express';
// import controller from '../controllers/controller.ts';

const Router = express.Router();

//
Router.get('/products', (req, res) => {
  res.send('You have reached products')
})

export default Router;