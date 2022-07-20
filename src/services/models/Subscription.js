const mongoose = require("mongoose");
const { Schema } = mongoose;

const subscriptionSchema = new Schema ({
    tier: {
        type: String,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    perks: {
        type: Array,
        default: []
    },
    
})