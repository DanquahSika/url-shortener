import { Router } from "express";
import { loginUser, logoutUser, profile, registerUser } from "../controllers/user.controller.js";


// create user routes
const router = Router();


// Define routes
router.post('/register',registerUser)

router.post('/login', loginUser)

router.post('/logout', logoutUser)

router.post('/me', profile)


export default router;