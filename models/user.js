const mongoose = require("mongoose");

userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    password: String,
    profilePicture: String
})

module.exports("Users", userSchema);