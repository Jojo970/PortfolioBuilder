import mongoose from "mongoose";

const webPageSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        websiteTitle: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        aboutMe: {
            type: String,
            required: true,
        },
        profilePicturePath: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        linkedIn: {
            type: String,
            required: true,
        },
        github: {
            type: String,
            required: true,
        },
        projects: mongoose.Schema.Types.Mixed,
    }, { timestamps: true}
);

const Webpage = mongoose.model("Post", webPageSchema)

export default Webpage;