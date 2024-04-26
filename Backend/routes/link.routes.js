import { Router } from "express";
import {
  deleteLink,
  getAllLinks,
  newLink,
  openLink,
  updateLink,
} from "../controllers/link.controller.js";
import { checkSessionUser } from "../middlewares/auth.js";

// create user routes
const router = Router();

// Define routes
router.post("/", checkSessionUser, newLink)

router.get("/", checkSessionUser, getAllLinks);

router.get("/:shortcode", openLink);

router.patch("/:id", checkSessionUser, updateLink);

router.delete("/:id", checkSessionUser, deleteLink);

export default router;
