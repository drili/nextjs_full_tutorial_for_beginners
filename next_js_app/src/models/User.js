import mongoose from "mongoose";

const existingModel = mongoose.models.User;

const userModel = existingModel || mongoose.model("User", new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true }));

export default userModel;
