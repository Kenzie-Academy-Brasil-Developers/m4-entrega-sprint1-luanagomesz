import {Router} from "express"
import createUserController from "../controller/createUser.controller"
import deleteUserController from "../controller/deleteUser.controller"
import listUsersController from "../controller/listUsers.controller"
import profileController from "../controller/profile.controller"
import updatedUserController from "../controller/updateUser.controller"
import userLoginController from "../controller/userLogin.controller"
import verifyAdmAcess from "../middlewares/VerifyAdminAcess"
import verifyAuthToken from "../middlewares/verifyAuthToken"

import verifyEmail from "../middlewares/verifyEmail"

const router = Router()
router.post("/users", verifyEmail, createUserController)
router.get("/users", verifyAuthToken, verifyAdmAcess, listUsersController)
router.get("/users/profile", verifyAuthToken, profileController)
router.put("/users/:uuid", verifyAuthToken, verifyAdmAcess, updatedUserController)
router.delete("/users/:uuid", verifyAuthToken, verifyAdmAcess, deleteUserController)

router.post("/login", userLoginController)


export default router