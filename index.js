import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import webpageRoutes from "./routes/webpages.js"
import { register } from "./controllers/auth.js";




// Configs

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet({
    contentSecurityPolicy: false,
  }));
app.use(helmet.crossOriginResourcePolicy({ policy : "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, "client", "build")));


// routes with files

app.post("/auth/register", register);


// Routes

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/webpages", webpageRoutes);

// heroku configs

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});




const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}). then( () => {
    app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

}).catch ( (error) => console.log( `${error} did not connect`))
