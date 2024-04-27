import { Router } from "express";
import {
  loginUser,
  logoutUser,
  profile,
  registerUser,
} from "../controllers/user.controller.js";
import { checkSessionUser } from "../middlewares/auth.js";

// create user routes
const router = Router();

// Define routes
router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/logout", checkSessionUser, logoutUser);

router.post("/me", checkSessionUser, profile);

export default router;
