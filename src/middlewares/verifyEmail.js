import users from "../database"

const verifyEmail = (request,response,next) => {

    const  {email}  = request.body
    const userAlreadyExists = users.find((el) => el.email === email)
    if(userAlreadyExists){
        return response.status(400).json({
            "message": "E-mail already registered",
        })
    }
    next()
}

export default verifyEmail