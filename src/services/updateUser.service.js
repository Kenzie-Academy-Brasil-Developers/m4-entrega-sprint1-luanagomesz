import users from "../database"
const updateUserService = (uuid,name,email) => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const updatedUser = {
        uuid,
        name,
        email,
        updatedAt: today
    }

    const userIndex = users.findIndex((el)=> el.uuid ===  uuid)
    if(userIndex ===  -1){
        return "user not found"
    }
    
    users[userIndex] = {...users[userIndex], ...updatedUser}

    return users[userIndex]
}

export default updateUserService