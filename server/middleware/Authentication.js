const jwt = require("jsonwebtoken");
const UserModel = require("../ConnectDatabase/Models/auth");

const Authentication = (req,res,next)=>{
    const token = req.headers['authorization'].split(" ").pop();

     if(!token){
        return res.status(401).send({message : "Please login first"})
     }
      
      const jwtToken = jwt.verify(token,"hush");
      console.log(jwtToken)

    if(!jwtToken){
         return res.status(401).send({message : "You are not Authorized"})
     }
      
    let user = jwt.decode(token);
    
    user = UserModel.findById(user.email);

    // user = user.toJSON();

    delete user.password;

    req.user = user;

     next();

}

module.exports = Authentication;