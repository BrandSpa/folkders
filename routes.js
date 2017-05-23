import controllers from "./controllers";
import passport from "./lib/passport";
import checkAuth from "./lib/auth";

export default function Routes(app) {
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
      req.session["access-token"] = "this is the token";
    }
  );

  app.get("/api/v1/users", checkAuth, controllers.users.get);
  app.post("/api/v1/users", controllers.users.store);

  app.get("/*", (req, res) => {
    return res.sendFile(__dirname + "/public/index.html");
  });
}
