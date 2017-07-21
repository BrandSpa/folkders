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
import responseTime from 'response-time';
import multer from 'multer';
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const appNext = next({ dev });
const handle = appNext .getRequestHandler();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/');
  },
  filename: function (req, file, cb) {
		console.log(file);
    cb(null, `${file.fieldname}_${Date.now()}.${file.mimetype.split('/')[1]}`);
  }
});

const upload = multer({ storage });

app.use(passport.initialize());
app.use(express.static('public/assets'));
app.use(express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(responseTime());

passportJwt(passport);

// app.post('/upload', , (req, res) => {
// 	return res.json(req.file);
// });
appNext.prepare()
.then(() => {

  app.post('/login', (req, res) => {
  	models.User.findOne({where: {email: req.body.email}}).then((user) => {
  		if(user) {
  			return models.User.checkPassword(user, req.body.password).then(isValid => {
  				if(isValid) {
  					var token = jwt.sign({ id: user.id }, config.secret, {
              expiresIn: 86400 //seconds
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
  	return models.User.create(body)
  	.then(user => res.status(201).json(user))
  	.catch(err => res.status(400).json(err));
  });

  app.post('/register/:id/company', (req, res) => {
  	const { body, params: { id } } = req;
  	//validate first that user has company already
  	return models.Company.create(body)
  	.then(company => {
  		models.User.findOne({where: {id: id}}).then(user => {
  			if(!user.company_id) {
  				user.company_id = company.id;
  			}
  			user.save().then(() => {
  					const token = jwt.sign({ id: user.id }, config.secret, {
  						expiresIn: 86400 //seconds
  					});
  					return res.json({ success: true, token });
  			});
  		});
  	})
  	.catch(err => res.status(400).json(err));
  });


  app.use(
  	'/graphql',
  	passport.authenticate("jwt", { session: false }),
  	upload.single('file'),
  	graphqlHTTP({
  		schema: Schema
  	})
  );

  app.use('/graphiql', graphqlHTTP({
  	schema: Schema,
  	graphiql: true
  }));

  app.get('*', (req, res) => {
    return handle(req, res)
  })

  app.listen(config.port);
});
