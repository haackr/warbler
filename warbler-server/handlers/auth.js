const db = require("../modesl");
const jwt = require("jsonwebtoken");

exports.signin = function(){}

exports.signup = async function(req, res, next){
  try {
    // create a user
    let user = await db.User.create(req.body);
    let {id, username, profileImageUrl} = user;
    // create a token
    let token = jwt.sign({
      id,
      username,
      profileImageUrl

    }, process.env.SECRET_KEY)
    return res.status(200).json({id, username, profileImageUrl, token})
  } catch(err){
    
  }
}