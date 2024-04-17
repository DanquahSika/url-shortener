import { Router } from "express";
import { deleteLink, getAllLinks, newLink, openLink, updateLink } from "../controllers/link.controller.js";


// create user routes
const router = Router();


// Define routes
router.post('/', newLink)

router.get('/', getAllLinks)

router.get('/:shortcode', openLink)

router.patch('/:id', updateLink)

router.delete('/:id', deleteLink)


export default router;



