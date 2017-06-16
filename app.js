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
	.then(user => res.status(201).json({user: user}))
	.catch(err => res.status(400).json({err}));
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

app.get("*", (req, res) => {
  return res.sendFile(__dirname + "/public/index.html");
});

app.listen(config.port);