const Joi = require("joi");
const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 50
    },
    price: {
        type: Number,
        required: true,
    },
    travelImg: {
        type: String,
        required: false,
    },
    coverImg: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        minlength: 20,
        maxlength: 300,
    },
    duration: {
        type: Number,
        required: true,
    },
    reservations: {
        type: Number,
        required: true,
    },
    maxGuest: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
    },
    minAge: {
        type: Number,
        required: true,
    },
    travelType: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    date: { type: Date, default: Date.now },
});

const Travel = mongoose.model("Travel", travelSchema);


function handleTravelValidation(travel) {
    const schema = Joi.object({
        name: Joi.string().min(10).max(50).required(),
        price: Joi.number().required(),
        description: Joi.string().min(20).max(300).required(),
        duration: Joi.number().required(),
        reservations: Joi.number().required(),
        location: Joi.string().required().min(10).max(200),
        discount: Joi.number(),
        maxGuest: Joi.number().required(),
        minAge: Joi.number().required(),
        travelType: Joi.string().required().min(10).max(50),
    });
    return schema.validate(travel, { abortEarly: false });
}

exports.Travel = Travel;
exports.handleTravelValidation = handleTravelValidation; 