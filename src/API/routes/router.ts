import express from 'express';
// import controller from '../controllers/controller.ts';

const Router = express.Router();

//
Router.get('/products', (req, res) => {
  res.send('You have reached products endpoint')
})

Router.get('/products/:id', (req, res) => {
  res.send('You have reached product information')
})

Router.get('/products/:id/styles', (req, res) => {
  res.send('You have reached product styles')
})

Router.get('/products/:id/related', (req, res) => {
  res.send('You have reached related products')
})

export default Router;