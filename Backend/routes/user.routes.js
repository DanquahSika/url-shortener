import { Router } from "express";
import { loginUser, logoutUser, profile, registerUser } from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/auth.js";


// create user routes
const router = Router();


// Define routes
router.post('/register',registerUser)

router.post('/login', loginUser)

router.post('/logout', verifyToken, logoutUser)

router.post('/me', verifyToken, profile)


export default router;