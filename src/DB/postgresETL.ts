/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Dialect, Sequelize } from 'sequelize';


const username = 'postgres';
const password = 'suavecoco';

const sequelize = new Sequelize('products', username, password, {
  host: 'localhost',
  dialect: 'postgres'
});

export default sequelize;