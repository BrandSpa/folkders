import express from 'express';
const app = express();
import config from './config';
import database from './models/index';
import Routes from './routes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import passport from 'passport';

app.use(cookieSession({
	name: 'folkders',
	secret: 'ohmen',
	maxAge: 24 * 60 * 60 * 1000
}));

app.use(express.static('public'));
app.use(passport.initialize());
app.use(bodyParser.json());

Routes(app);

app.listen(config.port);