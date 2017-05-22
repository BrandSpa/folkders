import users from "./controllers/users";
import passport from "./lib/passport";

export default function Routes(app) {
  app.get("/api/v1/users", users.get);
  app.post("/api/v1/users", users.store);

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      session: false,
      scope: [
        "https://www.googleapis.com/auth/plus.login",
        "https://www.googleapis.com/auth/userinfo.email"
      ]
    })
  );

  app.get(
    "/oauthCallback",
    passport.authenticate("google", { failureRedirect: "/login" }),
    (req, res) => {
      console.log('auth', req.isAuthenticated());
      return res.sendFile(__dirname + "/public/index.html");
    }
  );

	 app.get("/*", (req, res) => {
		 console.log(req.session);
		 req.session.nowInMinutes = 1;
		 return res.sendFile(__dirname + "/public/index.html");
	});

}
