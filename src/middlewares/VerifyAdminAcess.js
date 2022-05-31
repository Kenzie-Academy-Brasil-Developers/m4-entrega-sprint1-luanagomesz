
import user from "../database";
import jwt_decode from "jwt-decode";
const verifyAdmAcess = (req, res, next) => {
    let token = req.headers.authorization;
    let decoded = jwt_decode(token);
    const decodedUser = user.find((u) => u.email === decoded.email);

    const {uuid} = req.params


  if (decodedUser.isAdm ==  false && decodedUser.uuid != uuid) {
    return res.status(401).json({ "message": "Missing admin permissions"});
  }
  if(decodedUser.isAdm == false && decodedUser.uuid == uuid){
      return next()
  }

  if (decodedUser.isAdm == false) {
    return res.status(401).json({ "message": "Missing admin permissions"});
  }
  else{
    return next();
  }


};

export default verifyAdmAcess;