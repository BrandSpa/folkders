import express from 'express';
const app = express();
import config from './config';
import models from './models/index';
import Routes from './routes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import passport from 'passport';
import graphqlHTTP from 'express-graphql';
import Schema from './data/schema';

app.use(cookieSession({
	name: 'folkders',
	secret: 'ohmen',
	maxAge: 24 * 60 * 60 * 1000
}));

app.use(express.static('public/assets'));
// app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/graphql', graphqlHTTP({
  schema: Schema
}));

app.use('/graphiql', graphqlHTTP({
	schema: Schema,
	graphiql: true
}));

Routes(app);


app.listen(config.port);