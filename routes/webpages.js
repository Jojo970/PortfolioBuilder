import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { getUserWebpages, createWebpage,  } from "../controllers/webpage.js";
import multer from "multer";

const upload = multer();

const router = express.Router();

// create

router.post("/createpost", upload.fields([
  { name: 'profilePicture', maxCount: 1 },
  { name: 'projectImages', maxCount: 4 },
]), createWebpage)

//  Read

router.get("/:userId/posts", verifyToken, getUserWebpages);


export default router;