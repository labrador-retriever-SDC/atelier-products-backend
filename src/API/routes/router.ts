import express from 'express';
// import controller from '../controllers/controller.ts';

const Router = express.Router();

//
Router.get('', (req, res) => {
  res.send('You have reached products')
})

Router.get('/products/:id', (req, res) => {
  res.send('You have reached product information')
})

export default Router;