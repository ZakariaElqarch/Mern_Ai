import mongoose from "mongoose";

const Post = new mongoose.Schema({
    name: { type: String, reauired: true },
    prompt: { type: String, reauired: true },
    photo: { type: String, reauired: true },
})

const PostSchema = mongoose.model('Post',Post);

export default PostSchema;