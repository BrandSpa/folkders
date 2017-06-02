import { Strategy, ExtractJwt } from "passport-jwt";
const JwtStrategy = Strategy;
const opts = {
	jwtFromRequest: ExtractJwt.fromAuthHeader(),
	secretOrKey: "secret",
	issuer: "api.folkders.com",
	audience: "folkders.com"
};

export default function(passport) {
	passport.use(
		new JwtStrategy(opts, (jwt_payload, done) => {
			
			console.log(jwt_payload);

			User.findOne({ id: jwt_payload.sub }, (err, user) => {
				if (err) {
					return done(err, false);
				}

				if (user) {
					return done(null, user);
				} else {
					return done(null, false);
					// or you could create a new account
				}
			});
		})
	);

	return passport;
}

