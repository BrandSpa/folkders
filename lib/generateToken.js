//Generate Token using secret from process.env.JWT_SECRET
import jwt from jsonwebtoken;
import config from '../config';

function generateToken(user) {
  //1. Dont use password and other sensitive fields
  //2. Use fields that are useful in other parts of the     
  //app/collections/models
  var u = {
   name: user.name,
   username: user.username,
   admin: user.admin,
   _id: user._id.toString(),
   image: user.image
  };

  return token = jwt.sign(u, config.jwtSecret, {
     expiresIn: 60 * 60 * 24 // expires in 24 hours
  });
}

export default generateToken;