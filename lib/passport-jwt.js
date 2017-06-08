import { Strategy, ExtractJwt } from "passport-jwt";
import models from '../models';
const JwtStrategy = Strategy;
import config from '../config';

const opts = {
	jwtFromRequest: ExtractJwt.fromAuthHeader(),
	secretOrKey: config.secret
};

export default function(passport) {

	const strategy = new JwtStrategy(opts, (jwt_payload, done) => {
			models.User.findById(jwt_payload.id).then(user => {
				if(user) {
					return done(null, user);
				}

				return done(null, false);
			});
		
	});

	passport.use(strategy);
}

