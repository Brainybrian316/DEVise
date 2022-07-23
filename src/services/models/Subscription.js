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
        type: Schema.Types.Decimal128,
        required: true,
        // round data to two decimal places
        set: value => {new mongoose.Types.Decimal128.fromString(value.toFixed(2))}
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