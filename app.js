import express from 'express';
const app = express();
import config from './config';

app.listen(config.port);