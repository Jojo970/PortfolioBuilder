import Webpage from "../models/Webpage.js";
import User from "../models/User.js";
import { makeTheHTMLFile } from "../pages/htmlPageMaker.js";
import { cssString } from "../pages/cssPageMaker.js";
import fs from "fs";
import path from "path";
import AdmZip from "adm-zip";
const __dirname = path.dirname(new URL(import.meta.url).pathname);
//  Create

export const createWebpage = async ( req, res ) => {
    try {
        
        const newWebpage = new Webpage({
            ...req.body
        })
        await newWebpage.save();
        
        
        const projectImages = req.files.projectImages;
        const { userId } = req.body.userId;
        await User.findById(userId);

        const profilePictureFile = req.files.profilePicture[0];

        const htmlString = await makeTheHTMLFile(req.body)

        const webpageFolder = path.join(__dirname, "webpages", "userWebpage");
        const imagesFolder = path.join(webpageFolder, "images");

        fs.mkdirSync(webpageFolder, { recursive: true });
        fs.mkdirSync(imagesFolder, { recursive: true });


        fs.writeFileSync(path.join(webpageFolder, "index.html"), htmlString);
        fs.writeFileSync(path.join(webpageFolder, "style.css"), cssString);
        fs.writeFileSync(path.join(imagesFolder, profilePictureFile.originalname), profilePictureFile.buffer);
        projectImages.forEach((projectImage) => {
            const picturePath = path.join(imagesFolder, projectImage.originalname);
            fs.writeFileSync(picturePath, projectImage.buffer);
        });

        const zip = new AdmZip();
        zip.addLocalFolder(webpageFolder, "userWebpage"); 
        const zipBuffer = zip.toBuffer();

        await Webpage.find();

        res.setHeader("Content-Type", "application/zip");
        res.setHeader("Content-Disposition", "attachment; filename=userWebpage.zip");
        res.send(zipBuffer);
        

    } catch (err) {
        res.status(409).json( {message: err.message} )
        console.log(err);
    }
}

// read


export const getUserWebpages = async (req, res) => {
    try {
        const { userId } = req.params;
        const webpage = await Webpage.find({ userId });
        res.status(200).json(Webpage);
    } catch (err) {
        res.status(404).json( {message: err.message} )
    }

}

// update
