import users from "../database";
import jwt_decode from "jwt-decode"

const profileService = (request) =>{
    let token = request.headers.authorization;
    let decoded = jwt_decode(token);
    const decodedUser = users.find((u) => u.email === decoded.email);

    return decodedUser
}

export default profileService