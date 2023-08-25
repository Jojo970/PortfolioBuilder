import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { getUserWebpages, createWebpage,  } from "../controllers/webpage.js";
import multer from "multer";
const upload = multer();

const router = express.Router();

const maxFileCounts = {
  profilePicture:1,
  picture:1,
  pictureTwo: 1,
  pictureThree: 1,
  pictureFour: 1
}


// create

router.post("/createpost", upload.fields([
  { name: 'profilePicture', maxCount: 1 },
  { name: 'projectImages', maxCount: 4 },
]), createWebpage)

//  Read

router.get("/:userId/posts", verifyToken, getUserWebpages);


export default router;