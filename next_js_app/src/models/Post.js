import mongoose from "mongoose";

const existingModel = mongoose.models.Posts;

const postModel = existingModel || mongoose.model("Posts", new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
}, { timestamps: true }));

export default postModel;
