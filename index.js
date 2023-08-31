import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import webpageRoutes from "./routes/webpages.js"
import { register } from "./controllers/auth.js";
import { verifyToken } from "./middleware/auth.js";




// Configs

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);
dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy : "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true }));
app.use(cors());


// routes with files

app.post("/auth/register", register);


// Routes

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/webpages", webpageRoutes);

// mongoose configs



const PORT = process.env.PORT || 6001
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}). then( () => {
    app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

}).catch ( (error) => console.log( `${error} did not connect`))
