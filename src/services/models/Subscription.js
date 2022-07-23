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
    perks: [
        {
            type: String
        }
    ],
    price: {
        type: Number,
        required: true,
    },
    users: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ]

})

const Subscriptions = mongoose.model('Subscriptions', subscriptionSchema);

module.exports = Subscriptions