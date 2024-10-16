const Joi = require("joi");
const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    comments:{
        type:Number,
        required: true,
    },
    title:{
        type:String,
        required:true,
        minlength: 10,
        maxlength: 120,
    },
    Img: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
        minlength: 20,
        maxlength: 500,
    },
    date: { type: Date, default: Date.now },
});

const Post = mongoose.model("Post", postSchema);
function handlePostValidation(post) {
    const schema = Joi.object({
        title: Joi.string().min(10).max(120).required(),
        comments:Joi.number().required(),
        description: Joi.string().min(20).max(500).required(),
    });
    return schema.validate(post, { abortEarly: false });
}
exports.Post = Post;
exports.handlePostValidation = handlePostValidation; 