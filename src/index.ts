/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.get('/', async(req: Request, res: Response): Promise<Response> => res.status(200).send({ message: 'Welcome to SDC'}));

try {
  app.listen(3000, () => {console.log('Server running on http://localhost:3000')})
} catch (error) {
  console.log('Error ocurred')
}