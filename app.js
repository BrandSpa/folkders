import express from 'express';
const app = express();
import config from './config';
import models from './models';
import bodyParser from 'body-parser';
import passport from 'passport';
import graphqlHTTP from 'express-graphql';
import Schema from './data/schema';
import jwt from 'jsonwebtoken';
import passportJwt from './lib/passport-jwt';

app.use(passport.initialize());
app.use(express.static('public/assets'));
app.use(express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

passportJwt(passport);

app.post('/login', (req, res) => {
	models.User.findOne({where: {email: req.body.email}}).then((user) => {
		if(user) {
			return models.User.checkPassword(user, req.body.password).then(isValid => {
				if(isValid) {
					var token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400 // in seconds
          });

          return res.json({ success: true, token });
				}
				
				return res.json({success: false, token: null});
			});
		}
		return res.json({success: false, token: null});
	})
})

app.post('/register', (req, res) => {
	const { body } = req;
	
	models.Company.create({name: body.company_name}).then(company => {
		models.User.create({});
	});

	return res.json({});
});

app.use(
	'/graphql', 
	passport.authenticate("jwt", { session: false }),
	graphqlHTTP({ schema: Schema })
);

app.use('/graphiql', graphqlHTTP({
	schema: Schema,
	graphiql: true
}));

app.get("*", (req, res) => {
  return res.sendFile(__dirname + "/public/index.html");
});

app.listen(config.port);