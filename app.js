import express from 'express';
const app = express();
import config from './config';
import database from './models/index';
import Routes from './routes';
import bodyParser from 'body-parser';

app.use(bodyParser.json());

Routes(app);

app.listen(config.port);