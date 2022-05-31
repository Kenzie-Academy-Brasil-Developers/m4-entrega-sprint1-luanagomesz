import users from "../database/"
import {v4 as uuidv4} from "uuid"
import * as bycript from "bcryptjs"
const createUserService = async (email, name, password, isAdm) => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const hashedPassword = await bycript.hash(password,10)
    const newUser = {
        email,
        name,
        isAdm,
        createdOn: today,
        updatedOn: today,
        password: hashedPassword,
        uuid: uuidv4()
    }
    users.push(newUser)
    let res = {...newUser}
    delete res["password"]
    return res
}

export default createUserService