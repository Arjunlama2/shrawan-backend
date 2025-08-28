const mongoose = require("mongoose")


const userShema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
    },
    email: {
        type: String,
    },
    role: {
        type: String,
        enum: ["buyer", "seller"],
        default: "buyer"
    }
    
})


const User = mongoose.model("User", userShema)
module.exports = User