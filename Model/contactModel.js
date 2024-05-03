const mongoose = require("mongoose")
const Schema = mongoose.Schema

const contactSchema = new Schema({
    user_id: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "User"
    },
    name: {
        type: String,
        required: [true, "Please add the contact name"]
    },
    email: {
        type: String,
        required: [true, "Please add the contact email address"]
    },
    phone: {
        type: String,
        required: [true, "Please add the contact phone number"]
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model("contacts", contactSchema)