import updateUserService from "../services/updateUser.service";

const updatedUserController = (request, response) =>{
    const {uuid} = request.params
    const {name, email} = request.body

    const updatedUser = updateUserService(uuid,name,email)
    return response.json(updatedUser)
}

export default updatedUserController